import {
    Outlet
} from "react-router-dom"
import Sidebar from "../Sidebar"

export default function Layout() {

    return (
        <main style={{background:"#f1f1f1"}}>
            <Sidebar/>
            <Outlet/>                
        </main>
    )
    
}