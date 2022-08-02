import React from "react";
import $ from "jquery";

import "./content.css"
import "./responsive-content.css"

const arrayItem = [
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p8.jpg",
        text: "Đèn cảm ứng silicon chim cánh cụt...",
        price: "360.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p1.jpg",
        text: "Chú mèo Amuse Cat may mắn",
        price: "350.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p7.webp",
        text: "Gối Ôm Mèo MelyCat to và dài",
        price: "480.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p11.jpg",
        text: "Máy phun sương Misty Cat",
        price: "350.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p6.jpg",
        text: "Gấu bông mèo Konero",
        price: "280.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p4.jpg",
        text: "Chú Mèo Vui Vẻ",
        price: "200.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p5.webp",
        text: "Combo gối cổ và bịt mắt LuckyCat",
        price: "240.000",
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p9.jpg",
        text: "Máy phun sương du thuyền Captain...",
        price: "240.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p10.jpg",
        text: "Máy phun sương Space Cat",
        price: "320.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p12.jpg",
        text: "Quạt điều hòa Fancy Cat",
        price: "350.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p15.jpg",
        text: "Những chiếc măng cụt ôm góc bàn",
        price: "35.000"
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p23.jpg",
        text: "Mèo gốm Akita",
        price: "350.000"
    }
];

let listItemCart = new Map();

function ListItem() {    
    function MessagesAddItemSuccess(_this) {
        
    }

    function HanleOnClickAddItemToCart(event) {
        const _this = (event.target.tagName == "DIV") ? (event.target) : (event.target.parentNode);
        let count = listItemCart.get(_this);
        count = (count !== undefined) ? (count+1) : (1);
        listItemCart.set(_this,count);

        MessagesAddItemSuccess(_this);
    }

    return (
        <div className="list-items__wrap">
            {
                arrayItem.map((value,index) => {
                    return (
                        <div className="item col c-6 m-4 l-3" key={index} >
                            <a className="item__product" href="">
                                <div className="item__image" style={{backgroundImage:`url(${value.img})`}}/>
                            </a>
                            <div className="item__content">
                                <div className="item__desc">
                                    <a href="">
                                        <div className="item__desc-title">
                                            {value.text}
                                        </div>
                                    </a>
                                    <div className="item__desc-price">
                                        {value.price}
                                    </div>
                                </div>
                                <div className="item__buy-cart-wrap">
                                    <div className="item__buy">
                                        <i className="item__buy-icon fa-solid fa-bag-shopping"></i>
                                        <span>Buy now</span>
                                    </div>
                                    <div className="item__cart" onClick={HanleOnClickAddItemToCart}>
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