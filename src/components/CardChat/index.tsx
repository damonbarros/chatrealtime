import "./style.css"

export default function CardChat({ who, message, image }: { who: string, message: string, image: string }) {
    let styleConteiner: any;
    let styleBoxContent: any;

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
    }
    
    return (
        <div className="conteinerCardChat" style={styleConteiner}>
            <div className="boxContent" style={styleBoxContent}>
                <p>{message}</p>
            </div>
            <div className="boxImgUserChat">
                <img className="imgUserChat" src={image} alt="" />
            </div>
        </div>
    )
}