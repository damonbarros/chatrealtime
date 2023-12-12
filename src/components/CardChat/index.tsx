import "./style.css"

export default function CardChat({ who, message, image, date }: { who: string, message: string, image: string, date: string }) {
    let styleConteiner: any;
    let styleBoxContent: any;
    let styleConteinerContext: any;

    if(who == "i") {
        styleConteiner = {
            flexFlow: "row",
            justifyContent: "end"
        }
        styleBoxContent = {
            backgroundColor: "#00BF33",
            color: "white"
        }
    } else if (who == "you") {
        styleConteiner = {
            flexFlow: "row-reverse",
            justifyContent: "start"
        }
        styleBoxContent = {
            backgroundColor: "#fff",
            color: "gray"
        }
        styleConteinerContext = {
            alignItems: "start"
        }
    }
    
    return (
        <div className="conteinerCardChat" style={styleConteiner}>
            <div className="conteinerContext" style={styleConteinerContext}>
                <div className="boxContent" style={styleBoxContent}>
                    <p>{message}</p>
                </div>
                <small className="date">{date}</small>
            </div>
            <div className="boxImgUserChat">
                <img className="imgUserChat" src={image} alt="" />
            </div>
        </div>
    )
}