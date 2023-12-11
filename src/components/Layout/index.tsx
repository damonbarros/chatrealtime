import {
    Outlet
} from "react-router-dom"
import Sidebar from "../Sidebar"
import "./style.css"

export default function Layout() {

    return (
        <main className="mainLayout">
            <Sidebar/>
            <Outlet/>                
        </main>
    )
    
}