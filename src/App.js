import React, { createContext, useState,useMemo } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Shop from "./components/Main/Shop/shop";
import Home from "./components/Main/Home/home";

export const ListItems = createContext()
export const keyLocalStorage = "pesla-item"
export default function App() {
    const [listItems,setListItems] = useState(function() {
        if(localStorage.getItem(keyLocalStorage)) {
            const get = JSON.parse(localStorage.getItem(keyLocalStorage));
            return new Map(get);
        }
        else {
            return new Map();
        }
    })

    const countItems = useMemo(() => {
        const count = function() {
            let ans = 0;
            listItems.forEach((value,key,listItems) => {
                ans += value;
            })
            return ans;
        }
        return count();
    },[listItems])

    const totalPrice = useMemo(() => {
        const total_Price = function() {
            let ans = 0;
            listItems.forEach((value,key,listItems) => {
                ans += value*key.price;
            })
            return ans;
        }
        return `${total_Price().toLocaleString('vi')}đ`;
    })

    return (
        <div className="main">
            <ListItems.Provider value = {[listItems,setListItems,countItems,totalPrice]}>
        <Router>
            <Header countItems = {countItems} />
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