import React, { createContext, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Main/Shop/shop";
import Home from "./components/Main/Home/home";

export const ListItems = createContext()

export default function App() {
    const [listItems,setListItems] = useState(function() {
        if(localStorage.getItem("pesla-item")) {
        //    console.log(JSON.parse(localStorage.getItem("pesla-item")))
            return new Map();
        //    return JSON.parse(localStorage.getItem("pesla-item"))
        }
        else {
            return new Map();
        }
    })
    
    return (
        <div className="main">
            <ListItems.Provider value = {[listItems,setListItems]}>
        <Router>
            <Header/>
            <Routes>
                <Route path = "/" element ={<Home/>}/>
                <Route path = "/shop" element ={<Shop/>}/>
            </Routes>
            <Footer/>
        </Router>
            </ListItems.Provider>
        </div>
    )
}