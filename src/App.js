import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Shop/shop";
import Home from "./components/Home/home";

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path = "/home" element ={<Home/>}/>
                    <Route path = "/shop" element ={<Shop/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
         </React.Fragment>
    )
}