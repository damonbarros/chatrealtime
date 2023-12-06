import { useParams } from "react-router-dom"
import "./style.css"
import CardChat from "../CardChat";
import { Send } from "lucide-react";

export default function Chat() {
    const {id} = useParams();

    return(
        <section className="sectionChat">
            <h1 className="nameUser">{id}</h1>

            <div className="conteinerMessages">
                <CardChat who="i"/>
                <CardChat who="you"/>
                <CardChat who="you"/>
                <CardChat who="you"/>
            </div>

            <div className="boxSendMessage">
                <textarea  rows={2}></textarea>
                <Send size={30} className="iconSendMessage"/>
            </div>
        </section>
    )
}