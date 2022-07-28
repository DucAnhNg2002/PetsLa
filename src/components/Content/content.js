import React from "react";

import "./content.css"
const arrayItem = [
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p8.jpg",
        text: "Đèn cảm ứng silicon chim cánh cụt",
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
        text: "240.000",
    },
    {
        img: "https://petsla-api.herokuapp.com/media/photos/products/p9.jpg",
        text: "Máy phun sương du thuyền Captain...",
        text: "240.000"
    }
];

// function Item(key,className,...props) {
//     return (
//         <div className={className} key={key} style = {{backgroundImage:`url(${...props.img})`}}>

//         </div>
//     )
//     item.style.backgroundImage = `url(${props.img})`
//     item.style.backgroundRepeat = "no-repeat"
//     item.style.backgroundPosition = "center center"
//     item.style.backgroundSize = "cover"
//     return item;
// }

function ListItem() {
    return (
        <div className="list-items__wrap">
            {
                arrayItem.map((value,index) => {
                    return (
                        <div className="item col c-6 m-4 l-3" key={index} >
                            <div className="item__image" style={{backgroundImage:`url(${value.img})`}}>

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