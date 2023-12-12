import { useState, useEffect, useContext, useRef } from 'react'
import { AuthContext } from '../../Contexts/AuthContext';
import { UsersContext } from '../../Contexts/UsersContext';
import { Loader } from "lucide-react"
import { useParams } from "react-router-dom"
import "./style.css"
import { api } from "../../services/api";
import CardChat from "../CardChat";
import { useNavigate } from 'react-router-dom';
import { Send } from "lucide-react";
import socket from '../../services/websocket';

export default function Chat() {
    const [ userChat, setUserChat ] = useState<any>(null);
    const [ messages, setMessages ] = useState<any[]>([]);
    const [ text, setText ] = useState<string>('');

    const scrollableElementRef = useRef(null);

    const [ loadingMessages, setLoadingMessages ] = useState<any>(false);
    const { user, token } = useContext<any>(AuthContext);
    const { users } = useContext<any>(UsersContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmitMessage = async (e: any) => {
        e.preventDefault();
        try {
            if(text.length == 0) return;

            const messageNew = {
                idReceiver: userChat.uid,
                text
            }

            const { data } = await api.post(`/messages`, messageNew, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setText('')
            
            const newMessages = [
                ...messages,
                data
            ]

            setMessages(newMessages)
            
        } catch (error) {
            console.log(error)
        }
    }

    const scrollToBottom = () => {
        if (scrollableElementRef.current) {
          const scrollableElement: any = scrollableElementRef.current;
          scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }
    };

    async function getMessages(uid: string) {
        try {

            setLoadingMessages(true);
            const { data }: any = await api.get(`/messages/${uid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setMessages(data);

         } catch (error) {

            console.log(error);

        } finally {

            setLoadingMessages(false);

        }
    }

    function formatarData(dataISOString: Date) {
        // Cria um objeto Date a partir da string ISO
        const data = new Date(dataISOString);
      
        // Obtém os componentes da data
        const dia = data.getDate();
        const mes = data.getMonth() + 1; // Mês começa do zero, então somamos 1
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minuto = data.getMinutes();
      
        // Formata a data e a hora como desejado
        const dataFormatada = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano} às ${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}`;
      
        return dataFormatada;
      }
    
    useEffect(() => {
        try {

            if(users.length == 0) return;

            const userSelect = users.find((user: any) => user.uid == id);

            setUserChat(userSelect);
            getMessages(userSelect.uid);

        } catch (error) {

            console.log(error);
            navigate('/');

        }
    }, [users, id]);

    useEffect(() => {
        socket.auth = { token };
        socket.connect();
        socket.on('private message', (data: any) => {

            if(data.idSender != id) return;
            const newMessages = [
                ...messages,
                data
            ];
            setMessages(newMessages);
            scrollToBottom();

        }
        )
    }, [userChat, messages])

    useEffect(() => {
        scrollToBottom();
    }, []);

    return(
        <section className="sectionChat">
            {
                userChat ? (
                    <>
                        <h1 className="nameUser">{userChat.displayName}</h1>

                        <div className="conteinerMessages" ref={scrollableElementRef}>
                            {
                                loadingMessages ? <Loader/> : (
                                    messages.length == 0 ? "Não há messages!" : (
                                        messages.map((message: any) => {

                                            const date = formatarData(message.createdAt);
                                            
                                            return (
                                                <CardChat
                                                    key={message.id}
                                                    date={date}
                                                    message={message.text}
                                                    who={message.idSender == user.uid ? "i" : "you"}
                                                    image={message.idSender == user.uid ? user.photoURL : userChat.photoURL}
                                                />
                                            )
                                        })
                                    )
                                )
                            }
                        </div>

                        <div className="boxSendMessage">
                            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2}></textarea>
                            <button type='button' onClick={handleSubmitMessage}>
                                <Send size={30} className="iconSendMessage"/>
                            </button>
                        </div>
                    </>
                ) : "Carregando..."
            }
        </section>
    );
}