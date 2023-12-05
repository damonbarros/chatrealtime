import CardUser from "../CardUser";
import Search from "../Search";
import "./style.css"

export default function ConteinerUsers () {
    return (
        <div className="containerUsers">
            <Search/>

            <div>
                <CardUser image="https://classic.exame.com/wp-content/uploads/2022/12/GettyImages-1245478207.jpg"/>
            </div>
        </div>
    )
}