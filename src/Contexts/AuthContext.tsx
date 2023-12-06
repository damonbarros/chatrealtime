import { useState, createContext, useEffect, ReactNode } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase";
import Cookies from "js-cookie";

export const AuthContext = createContext({});

function AuthProvider({ children } : { children: ReactNode }) {
    const [user, setUser] = useState({})
    const [token, setToken] = useState<string | null>(null)

    async function logout() {
        try {
            Cookies.remove('token')
            Cookies.remove('user')
        } catch (error) {
            throw new Error()
        }
    }
    
    async function SignInGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            const token = await result.user.getIdToken()

            const data = {
                uid: result.user.uid,
                email: result.user.email,
                name: result.user.displayName,
                photoURL: result.user.photoURL
            }
            setUser(data)

            Cookies.set('token', token, { expires: 30 })   
            Cookies.set('user', JSON.stringify(data), { expires: 30 })
        } catch (error) {
            throw new Error()
        }
    }

    useEffect(() => {
        console.log("a")
        const dataUser = Cookies.get('user')
        const tokenCookie = Cookies.get('token')

        if(!dataUser || !tokenCookie) {
            logout()
            return
        }

        setUser(JSON.parse(dataUser))
        setToken(tokenCookie)
    }, [])
  
    return (
      <AuthContext.Provider value={{ SignInGoogle, user, token }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;