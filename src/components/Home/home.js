import { Link } from "react-router-dom"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="carousel-inner">
                <Link to = "/shop">
                    <img src="https://www.leoasher.dev/static/media/banner1.237a7309.png"/>
                </Link>
            </div>
        </div>
    )
}