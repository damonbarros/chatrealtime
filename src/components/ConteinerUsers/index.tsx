import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../../Contexts/UsersContext";
import CardUser from "../CardUser";
import Search from "../Search";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

import "./style.css"

export default function ConteinerUsers () {
    const { user  } = useContext<any>(AuthContext)
    const { users } = useContext<any>(UsersContext)
    const [listUsers, setListUsers] = useState<any[]>([])
    const navigate = useNavigate();

    function openChat(uid: string) {
        navigate(`/${uid}`)
    }

    function searchUsers(text: string) {

        const newUsers = users.filter((outUser: any) => outUser.uid != user.uid)

        const newUsers1 = newUsers.filter((user: any) => {
            const name = (user.displayName).toLowerCase()
            return name.includes((text).toLowerCase())
        })


        setListUsers(newUsers1)
    }

    useEffect(() => {
        if(users.length == 0) return

        const newUsers = users.filter((outUser: any) => outUser.uid != user.uid)

        setListUsers(newUsers)
    }, [users])
    
    return (
        <div className="containerUsers">
            <Search onChange={(e: any) => {
                searchUsers(e.target.value)
            }}/>

            <div>
                {
                    listUsers.length == 0 ? "Não há usuarios" :
                    listUsers.map((user: any) => {
                        return (
                            <CardUser key={user.uid} onClick={() => openChat(user.uid)} image={user.photoURL} name={user.displayName} lastMessage="olá, mundo!"/>
                        )
                    })
                }
            </div>
        </div>
    )
}