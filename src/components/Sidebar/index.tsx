import ConteinerUsers from "../ConteinerUsers";
import Header from "../Header";
import "./style.css"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <Header/>
            <ConteinerUsers/>
        </div>
    )
}
