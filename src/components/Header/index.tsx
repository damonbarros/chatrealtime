import { LogOut } from "lucide-react";
import { useContext } from "react"

import { AuthContext } from '../../Contexts/AuthContext';


import './style.css'

export default function Header () { 
    const { logout } = useContext<any>(AuthContext)

    return(
        <header className="header" >
                <h2>Chat</h2>

                <div onClick={() => logout()} className="boxlogout">
                    <p>Logout</p>
                    <LogOut />
                </div>
        </header>
    )
}