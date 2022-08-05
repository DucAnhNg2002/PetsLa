import React, { useEffect, useState, useContext } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./content.css"
import "./responsive-content.css"
import { keyLocalStorage } from "../../../../app";
import { ListItems } from "../../../../app";
// const arrayItem = [
//     {
//         id: 1,
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p8.jpg",
//         product_name: "Đèn cảm ứng silicon chim cánh cụt...",
//         price: "360.000"
//     },
//     {
//         id: 2,
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p1.jpg",
//         product_name: "Chú mèo Amuse Cat may mắn",
//         price: "350.000"
//     },
//     {
//         id: 3,
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p7.webp",
//         product_name: "Gối Ôm Mèo MelyCat to và dài",
//         price: "480.000"
//     },
//     {
//         id: 4,
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p11.jpg",
//         product_name: "Máy phun sương Misty Cat",
//         price: "350.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p6.jpg",
//         product_name: "Gấu bông mèo Konero",
//         price: "280.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p4.jpg",
//         product_name: "Chú Mèo Vui Vẻ",
//         price: "200.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p5.webp",
//         product_name: "Combo gối cổ và bịt mắt LuckyCat",
//         price: "240.000",
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p9.jpg",
//         product_name: "Máy phun sương du thuyền Captain...",
//         price: "240.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p10.jpg",
//         product_name: "Máy phun sương Space Cat",
//         price: "320.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p12.jpg",
//         product_name: "Quạt điều hòa Fancy Cat",
//         price: "350.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p15.jpg",
//         product_name: "Những chiếc măng cụt ôm góc bàn",
//         price: "35.000"
//     },
//     {
//         images: "https://petsla-api.herokuapp.com/media/photos/products/p23.jpg",
//         product_name: "Mèo gốm Akita",
//         price: "350.000"
//     }
// ];

function ListItem() {
    // toast_messges    
    const notify = () => toast.success('Add to cart successfuly!', { // toast_messages
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const [arrayItem,setArrayItem] = useState([]) // use get product from API
    const [listItems,setListItems] = useContext(ListItems) // use save item when click add
    useEffect(function() {
        // call API
        console.log("Loading API!")
        fetch("http://petsla-api.herokuapp.com/products/")
        .then(response => response.json())
        .then(data => {
            let arrayItem = data;
            arrayItem.forEach(e => {
                e.images = "http://petsla-api.herokuapp.com" + e.images
            });
        console.log("Finish load API!")
            while(arrayItem.length > 12) arrayItem.pop()
            setArrayItem(data)
        })
    },[]);
    function addItem(e) {
        notify()
        let item = e.target;
        while(!item.classList.contains("item")) {
            item = item.parentElement
        }
        item = arrayItem.find((value) => {
            return value.id == item.getAttribute("id")
        })
        setListItems(prelistItems => {
            let listItems = new Map(prelistItems)
            const count = (listItems.get(item) == undefined)? (1) : (listItems.get(item)+1)
            listItems.set(item,count)
            localStorage.setItem(keyLocalStorage,JSON.stringify(Array.from(listItems))) // add item to storage
            return listItems
        })
    }
    return (
        <React.Fragment>
        <div className="toast-messages">
            <ToastContainer/>
        </div>
        <div className="list-items__wrap">
            {
                arrayItem.map((item,idx) => {
                    return (
                        <div className="col c-6 m-4 l-3 item" key = {idx} id = {item.id}>
                            <a className="item__product" href="/">
                                <div className="item__image" style={{backgroundImage:`url(${item.images})`}}/>
                            </a>
                            <div className="item__content">
                                <div className="item__desc">
                                    <a href="/">
                                        <div className="item__desc-title">
                                            {item.product_name}
                                        </div>
                                    </a>
                                    <div className="item__desc-price">
                                        {item.price.toLocaleString('vi')}
                                    </div>
                                </div>
                                <div className="item__buy-cart-wrap">
                                    <div className="item__buy">
                                        <i className="item__buy-icon fa-solid fa-bag-shopping"></i>
                                        <span>Buy now</span>
                                    </div>
                                    <div className="item__cart" onClick={addItem}>
                                        <i className="item__cart-icon fa-solid fa-cart-plus"></i>
                                        <span>Add to Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </React.Fragment>
    )
}

export default function Content() {
    return (
        <div className="content grid wide">
            <div className="content__list-items">
                <ListItem></ListItem>
            </div>
        </div>
    )
}