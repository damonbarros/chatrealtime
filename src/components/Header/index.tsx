import { LogOut } from "lucide-react";

import './style.css'

export default function Header () { 
    return(
        <header className="header" >
                <h2>Chat</h2>

                <div className="boxlogout">
                    <p>Logout</p>
                    <LogOut />
                </div>
        </header>
    )
}