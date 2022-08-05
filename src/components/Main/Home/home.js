import React from "react"

import { Link } from "react-router-dom"
import "./home.css"
import "../../../style.css"

export default function Home() {
    return (
        <div className="home">
            <Link to = "/shop">
                <img src = {"https://www.leoasher.dev/static/media/banner2.caec085c.png"} alt="Image Shop"/>
            </Link>
        </div>
    )
}