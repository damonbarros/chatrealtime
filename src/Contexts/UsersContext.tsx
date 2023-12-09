import { useState, createContext, useEffect, ReactNode } from "react";
import { api } from "../services/api";


export const UsersContext = createContext({});

function UsersProvider({ children } : { children: ReactNode }) {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<any[]>([])
  
  async function getUsers() {
    try {
        setLoading(true)
        const { data } = await api.get('/users')

        setUsers(data)
        
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false)
    }
}

useEffect(() => {
    getUsers()
}, [])
  
  return (
    <UsersContext.Provider value={{ users, loading }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;