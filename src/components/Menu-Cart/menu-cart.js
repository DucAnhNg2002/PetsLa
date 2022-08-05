import React, { useContext } from "react";
import $ from "jquery"

import { ListItems } from "../../app";
import "./menu-cart.css"

export default function MenuCart({styleMenuCart,setStyleMenuCart}) {
    const [listItems,setListItems,countItems] = useContext(ListItems)
    function CloseMenuCart() {
        setStyleMenuCart(preStyleMenuCart => {
            const styleMenuCart = {...preStyleMenuCart, right: "-400px"}
            return styleMenuCart
        })
    }
    function RemoveItem(e) {
        let item = e.target;
        while(!item.classList.contains("menu-cart-item")) {
            item = item.parentElement
        }
        let key = Array.from(listItems.keys()).find(key => key.id = item.getAttribute("id"))
        setListItems(preListItems => {
            let listItems = new Map(preListItems) 
            listItems.delete(key) 
            return listItems
        })
    }
    return (
        <div className="menu-cart-wrap" style={{right: styleMenuCart.right}}>
            <div className="menu-cart">
                <div className="menu-cart__header">
                    <div className="menu-cart__header-title">
                        Cart: {countItems} Items
                    </div>
                    <div className="menu-cart__header-close" onClick={CloseMenuCart}>
                    <i className ="fa-solid fa-xmark btnclose"></i>
                    </div>
                </div>
                <div className = "menu-cart__body">
                {
                    Array.from(listItems).map(([key,value],idx) => {
                        return (
                            <div className="menu-cart-item" key={idx} id = {key.id}>
                                <div className="product-info">
                                    <div className="product-img" style={{backgroundImage: `url(${key.images})`}}></div>
                                    <div className="product-description">
                                        <div className = "product-name"> {key.product_name} </div>
                                        <div className = "product-price"> {key.price}đ x {value}</div>
                                        <div className = "product-total-price">{value*key.price}</div>
                                    </div>
                                </div>
                                <div className="product-button-close" onClick={RemoveItem}>
                                    <i className ="fa-solid fa-xmark btnclose"></i>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div> 
        </div>
    )
}