import "./style.css"

export default function CardChat({ who }: { who: string }) {
    let styleConteiner: any;
    let styleBoxContent: any;

    if(who == "i") {
        styleConteiner = {
            flexFlow: "row"
        }
        styleBoxContent = {
            backgroundColor: "#00BF33",
            color: "white"
        }
    } else if (who == "you") {
        styleConteiner = {
            flexFlow: "row-reverse"
        }
        styleBoxContent = {
            backgroundColor: "#fff",
            color: "gray"
        }
    }
    
    return (
        <div className="conteinerCardChat" style={styleConteiner}>
            <div className="boxContent" style={styleBoxContent}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos distinctio eius nobis doloremque cumque, eligendi ut! Illo ut nisi tenetur eligendi reiciendis deserunt explicabo, fugit laboriosam ab sequi dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id labore tempore obcaecati reiciendis veritatis consectetur autem eligendi error fugiat vero, facere ex exercitationem quasi asperiores eveniet ab sed laboriosam.</p>
            </div>
            <div className="boxImgUserChat">
                <img className="imgUserChat" src="https://classic.exame.com/wp-content/uploads/2022/12/GettyImages-1245478207.jpg" alt="" />
            </div>
        </div>
    )
}