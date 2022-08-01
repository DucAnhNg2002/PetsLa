import React, { createContext,useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Shop/shop";
import Home from "./components/Home/home";

export const themeColor = createContext();
export const themeHandle = createContext();

export default function App() {
    const [color,setColor] = useState(["rgb(230, 150, 70)","black","black","black","black"]);
    function handleChangePage(event) {
        const resetColor = ["black","black","black","black","black"];
        let id;
        if(!event.target.getAttribute("id")) {
            id = event.target.parentElement.getAttribute("id")%5;
        }
        else id = event.target.getAttribute("id");
        resetColor[id] = "rgb(230, 150, 70)";
        setColor(resetColor);
     }
    return (
        <themeColor.Provider value = {color}>
        <themeHandle.Provider value = {handleChangePage}>
            <React.Fragment>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path = "/" element ={<Home/>}/>
                        <Route path = "/shop" element ={<Shop/>} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </React.Fragment>
        </themeHandle.Provider>
        </themeColor.Provider>
    )
}