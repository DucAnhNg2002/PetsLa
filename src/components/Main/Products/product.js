import React, { useEffect, useState } from "react"
import "./product.css"

const ID = function() {
    const URL = window.location.href.toString();
    let ans = "", idx = URL.length-1;
    while(URL[idx] != '-') {
        ans = URL[idx] + ans;
        idx--;
    }
    return ans;
}

export default function Product() {
    const [item,setItem] = useState({});
    useEffect(() => {
        fetch(`https://petsla-api.herokuapp.com/product/${ID()}`)
        .then(response => response.json())
        .then(value => {
            const item = value
            item.images = "http://petsla-api.herokuapp.com" + item.images;
            setItem(item)
        })
    },[]) 

    return (
        <div className="product-container">
            <div className="product-wrap grid wide">
                {
                    (item != undefined) &&
                    <React.Fragment>
                        <div className="col l-6">
                            <div className="product__img-wrap">
                                <img className="product__img" src = {item.images}/>
                            </div>
                        </div>
                        <div className="col l-6">
                            <div className="product__info-wrap">
                                <div className="product__title">
                                    <h2>
                                        {item.product_name}
                                    </h2>
                                </div>
                                <div className="product__price">
                                    {(item.price)} đ
                                </div>
                                <div className="product__btn-wrap">
                                    <div className="product__btn-buy-wrap">
                                        <button className="product__btn product__btn-buy">Buy Now</button>
                                    </div>
                                    <div className="product__btn-buy-wrap">
                                        <button className="product__btn product__btn-add">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}