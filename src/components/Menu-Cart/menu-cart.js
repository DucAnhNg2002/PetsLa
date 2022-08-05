import React, { useContext } from "react";
import $ from "jquery"

import { ListItems } from "../../app";
import "./menu-cart.css"
import { keyLocalStorage } from "../../app";
export default function MenuCart({styleMenuCart,setStyleMenuCart}) {
    const [listItems,setListItems,countItems,totalPrice] = useContext(ListItems)
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
    //    console.log(item.getAttribute("id"))
        let key = Array.from(listItems.keys()).find((val) => {
            return val.id == item.getAttribute("id")
        })
        console.log(key)
        setListItems(preListItems => {
            let listItems = new Map(preListItems) 
            listItems.delete(key) 
            localStorage.setItem(keyLocalStorage,JSON.stringify(Array.from(listItems))) // add item to storage
            return listItems
        })
    }
    return (
        <div className="menu-cart-wrap" style={{right: styleMenuCart.right, height: window.screen.height}}>
            <div className="menu-cart">
                <div className="menu-cart__header">
                    <div className="menu-cart__header-title">
                        Cart: {countItems} Items 
                    </div>
                    <div className="menu-cart__header-close" onClick={CloseMenuCart}>
                    <i className ="fa-solid fa-xmark btnclose"></i>
                    </div>
                </div>
                <div className = "menu-cart__body" style={{height: window.screen.height - 300}}>
                {
                    Array.from(listItems).map(([key,value],idx) => {
                        return (
                            <div className="menu-cart-item" key={idx} id = {key.id}>
                                <div className="product-info">
                                    <div className="product-img" style={{backgroundImage: `url(${key.images})`}}></div>
                                    <div className="product-description">
                                        <div className = "product-name"> {key.product_name} {key.id}</div>
                                        <div className = "product-price"> {key.price.toLocaleString('vi')}đ x {value}</div>
                                        <div className = "product-total-price">{(value*key.price).toLocaleString('vi')}đ</div>
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
                <div className="menu-cart__footer">
                    <button type = "button" className="menu-cart-btn btn-primary">Checkout ({totalPrice})</button>
                    <button type = "button" className="menu-cart-btn btn-view-cart">View Cart</button>
                </div>
            </div> 
        </div>
    )
}