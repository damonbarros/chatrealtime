import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext';
import { UsersContext } from '../../Contexts/UsersContext';
import { Loader } from "lucide-react"
import { useParams } from "react-router-dom"
import "./style.css"
import { api } from "../../services/api";
import CardChat from "../CardChat";
import { useNavigate } from 'react-router-dom';
import { Send } from "lucide-react";

export default function Chat() {
    const [ userChat, setUserChat ] = useState<any>(null)
    const [ messages, setMessages ] = useState<any[]>([])
    const [ loadingMessages, setLoadingMessages ] = useState<any>(false)
    const { user, token } = useContext<any>(AuthContext)
    const { users } = useContext<any>(UsersContext)
    const { id } = useParams();
    const navigate = useNavigate();
    

    async function getMessages(uid: string) {
        try {
            setLoadingMessages(true)
            const { data }: any = await api.get(`/messages/${uid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log(data)
            
            setMessages(data)
         } catch (error) {
            console.log(error)
        } finally {
            setLoadingMessages(false)
        }
    }
    
    useEffect(() => {
        try {
            const userSelect = users.find((user: any) => user.uid == id)
            setUserChat(userSelect)

            getMessages(userSelect.uid)
        } catch (error) {
            console.log(error)
            navigate('/')
        } finally {
        }
    }, [id])

    return(
        <section className="sectionChat">
            {
                userChat ? (
                    <>
                    <h1 className="nameUser">{userChat.displayName}</h1>

                    <div className="conteinerMessages">
                        {
                            loadingMessages ? <Loader/> : (
                                messages.length == 0 ? "Não há messages!" : (
                                    messages.map((message) => {
                                        return (
                                            <CardChat who="i"/>
                                        )
                                    })
                                )
                            )
                        }
                    </div>

                    <div className="boxSendMessage">
                        <textarea rows={2}></textarea>
                        <Send size={30} className="iconSendMessage"/>
                    </div>
                    </>
                ) : "Error"
            }
        </section>
    )
}