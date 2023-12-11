import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { Loader } from 'lucide-react'
import "./style.css"

export default function Login() {

  const { loading, SignInGoogle } = useContext<any>(AuthContext)

  async function handleLogin() {
    try {
      await SignInGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="mainLogin">
      <h1>Chat Real-Time</h1>
      <button disabled={loading} onClick={(e) => {
        e.preventDefault()
        handleLogin()
      }} className="boxGoogle">
        {
          loading ? <Loader/> : ""
        }
        <p>Fazer Login com Google</p>
      </button>
    </main>
  )
  
}