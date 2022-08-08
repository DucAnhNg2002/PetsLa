import React, { useEffect, useState, useContext, useRef } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./shop.css"
import "./responsive-content.css"
import { keyLocalStorage } from "../../../App";
import { ListItems } from "../../../App";
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

function HeaderProduct({firstArrayItem,setArrayItem}) {
    function handleSort(e) {
        const type = e.target.value
        switch(type) {
            case "Relevance": 
                setArrayItem(() => {
                    return [...firstArrayItem]
                })
                break;
            case "Name: A-Z":
                setArrayItem(preArrayItem => {
                    const arrayItem = [...preArrayItem]
                    arrayItem.sort((a,b) => a.product_name.localeCompare(b.product_name))
                    return arrayItem
                })
                break;
            case "Name: Z-A":
                setArrayItem(preArrayItem => {
                    const arrayItem = [...preArrayItem]
                    arrayItem.sort((a,b) => b.product_name.localeCompare(a.product_name))
                    return arrayItem
                })
                break;
            case "Price: Low to High":
                setArrayItem(preArrayItem => {
                    const arrayItem = [...preArrayItem]
                    arrayItem.sort((a,b) => a.price - b.price)
                    return arrayItem
                })
                break;
            case "Price: High to Low":
                setArrayItem(preArrayItem => {
                    const arrayItem = [...preArrayItem]
                    arrayItem.sort((a,b) => b.price - a.price)
                    return arrayItem
                })
                break;
            default:
                throw new Error("Sort Error!")
        }
    }
    return (
        <div className="header__product-wrap">
            <div className="sort__product-wrap">
                <label className = "label-sort-product" htmlFor = "sort-product">Sort by:</label>
                <select id = "sort-product" name = "sort-product" onChange={handleSort}>
                    <option className="option-sort-product">Relevance</option>
                    <option className="option-sort-product">Name: A-Z</option>
                    <option className="option-sort-product">Name: Z-A</option>
                    <option className="option-sort-product">Price: Low to High</option>
                    <option className="option-sort-product">Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}

let firstArrayItem = []
export default function Shop() {
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
    const [itemPerPage,setItemPerPage] = useState(12) // use to count the number of products per page 
    const [currentPage,setCurrentPage] = useState(1) // current page
    let numberPages = useRef();
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
            firstArrayItem = data
            setArrayItem(data)
        })
        // 40 items
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
            let listItems = [...prelistItems]
            let idx = listItems.findIndex(([key,value]) => {
                return key.id == item.id
            })
            if(idx == -1) {
                listItems.push([item,1])
            }
            else listItems[idx][1] ++
            localStorage.setItem(keyLocalStorage,JSON.stringify(listItems)) // add item to storage
            return listItems
        })
    }
    function setProductPerPage(e) {
        setItemPerPage(e.target.value)
        setCurrentPage(1)
    }
    return (
    <div className="shop grid wide">
        <HeaderProduct firstArrayItem = {firstArrayItem} setArrayItem = {setArrayItem}/>
        <div className="content__list-items">
            <div className="toast-messages">
                <ToastContainer/>
            </div>
            <div className="list-items__wrap">
                {
                    arrayItem.map((item,idx) => {
                        if(idx < itemPerPage*currentPage && idx >= itemPerPage*(currentPage-1)) {
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
                        }
                    })
                }
            </div>
        </div>
        <div className="pagination">
            <ul className="pagination-wrap">
                <li className={`page-item ${(currentPage == 1)?("page-item--disable"):("")}`} style={{borderTopLeftRadius: ".2rem", borderBottomLeftRadius: ".2rem"}}
                    onClick = {() => {if( currentPage > 1) { setCurrentPage(preCurrentPage => preCurrentPage-1)}}}>
                    <i className="page-link fa-solid fa-angle-left"></i>
                </li>
                {
                    function() {
                        let pageItems = [];
                        numberPages = arrayItem.length / itemPerPage;
                        if(numberPages != parseInt(numberPages)) {
                            numberPages = parseInt(numberPages) + 1;
                        }
                        for(let i = 1; i <= numberPages; i++) {
                            pageItems.push(
                                <li className={`page-item ${(currentPage == i)?("page-item--active"):("")}`} key = {i} onClick = {() => {setCurrentPage(i)}}>
                                    <span className="page-link">{i}</span>
                                </li>
                            )
                        }
                        return pageItems
                    }()
                }
                <li className={`page-item ${(currentPage == numberPages)?("page-item--disable"):("")}`} style={{borderTopRightRadius: ".2rem", borderBottomRightRadius: ".2rem"}}
                    onClick = {() => {if( currentPage < numberPages) { setCurrentPage(preCurrentPage => preCurrentPage+1)}}}>
                    <i className="page-link fa-solid fa-angle-right"></i>
                </li>
            </ul>
            <div className="select-products-per-page">
                <label className = "label form-lable" htmlFor = "item-per-page">Items/Page</label>
                <select name = "item-per-page" id = "item-per-page" onChange={setProductPerPage}>
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                </select>
            </div>
        </div>
    </div>
    )
}
