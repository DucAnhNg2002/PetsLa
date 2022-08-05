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
        setListItems(preListItems => {
            let listItems = [...preListItems]
            // find index element from array when click remove by id
            const idx = listItems.findIndex(([key,value]) => {
                return key.id == item.getAttribute("id")
            })
            listItems.splice(idx,1) 
            localStorage.setItem(keyLocalStorage,JSON.stringify(listItems)) // add item to storage
            return listItems
        })
    }
    const a = [5];
    return (
    //    <div className="menu-cart-wrap" style={{right: styleMenuCart.right, height: window.screen.height}}>
        <div className="menu-cart-wrap" style={{right: styleMenuCart.right, height: "100%"}}>
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
                    (
                    listItems.length > 0 && 
                    listItems.map(([key,value],idx) => {
                        return (
                            <div className="menu-cart-item" key={idx} id = {key.id}>
                                <div className="product-info">
                                    <div className="product-img" style={{backgroundImage: `url(${key.images})`}}></div>
                                    <div className="product-description">
                                        <div className = "product-name"> {key.product_name}</div>
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
                    )
                    || 
                    (
                        <div className="no-products">
                            <img className="no-products-img" src = "https://www.leoasher.dev/static/media/sadCat.2335333f.png" />
                            <h3 className="no-products-title"> There's no item in cart! </h3>
                        </div>
                    )
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