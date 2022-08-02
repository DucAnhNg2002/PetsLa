import React, { createContext,useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Shop/shop";
import Home from "./components/Home/home";

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path = "/" element ={<Home/>}/>
                <Route path = "/shop" element ={<Shop/>}/>
            </Routes>
            <Footer/>
     </Router>
    )
}