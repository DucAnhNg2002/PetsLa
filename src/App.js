import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Main/Shop/shop";
import Home from "./components/Main/Home/home";

export default function App() {
    const [backgroundMain,setBackgroundMain] = useState("#fafafa")
    return (
        <div className="main" style={{backgroundColor: backgroundMain}}>
        <Router>
            <Header/>
            <Routes>
                <Route path = "/" element ={<Home/>}/>
                <Route path = "/shop" element ={<Shop/>}/>
            </Routes>
            <Footer/>
        </Router>
        </div>
    )
}