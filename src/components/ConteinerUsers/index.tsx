import { useContext } from "react"
import { UsersContext } from "../../Contexts/UsersContext";
import CardUser from "../CardUser";
import Search from "../Search";
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function ConteinerUsers () {
    const { users } = useContext<any>(UsersContext)
    const navigate = useNavigate();

    function openChat(uid: string) {
        navigate(`/${uid}`)
    }
    
    return (
        <div className="containerUsers">
            <Search/>

            <div>
                {
                    users.length == 0 ? "Não há usuarios" :
                    users.map((user: any) => {
                        return (
                            <CardUser key={user.uid} onClick={() => openChat(user.uid)} image={user.photoURL} name={user.displayName} lastMessage="olá, mundo!"/>
                        )
                    })
                }
            </div>
        </div>
    )
}