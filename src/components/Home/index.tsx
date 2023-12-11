import "./style.css"
import background from "../../../public/background.svg"

export default function Home() {
    return(
        <section className="sectionHome">
            <img src={background} alt="" />
            <h1>Chat Real-Time</h1>
        </section>
    )
}