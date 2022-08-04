import React, { createContext, useMemo, useState } from "react";
import $ from "jquery"
import "./menu-cart.css"

export const products = createContext();
export default function MenuCart({styleMenuCart,setStyleMenuCart}) {
    const [listItems,setListItems] = useState(new Map([["a",2],["b",3]]));
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
    function CloseMenuCart() {
        setStyleMenuCart(preStyleMenuCart => {
            const styleMenuCart = {...preStyleMenuCart, right: "-400px"}
            return styleMenuCart
        })
    }
    return (
        <products.Provider value = {[listItems,setListItems]}>
        <div className="menu-cart-wrap" style={{right: styleMenuCart.right}}>
            <div className="menu-cart">
                <div className="menu-cart__header">
                    <div className="menu-cart__header-title">
                        Cart: {countItems} Items
                    </div>
                    <div className="menu-cart__header-close" onClick={CloseMenuCart}>
                    <i class="fa-solid fa-xmark btnclose"></i>
                    </div>
                </div>
            </div> 
        </div>
        </products.Provider>
    )
}