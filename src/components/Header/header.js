import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import "./header.css"
import "../../grid.css"

export default function Header() {
    const [displayHeaderInfo,setDisplayHeaderInfo] = useState('flex');
    const handleDisplayHeaderInfo = (value) => {
        if(value == 0) {
            setDisplayHeaderInfo('flex');
        }
        else {
            setDisplayHeaderInfo('none');
        }
    }
    window.onscroll = (event) => {
        handleDisplayHeaderInfo(window.scrollY);
    }
    return (
        <header className = "header">
            <div style={{borderBottom: "2px solid hsla(0,0%,66.7%,.3)"}}>
                <div className="grid wide">
                    <div className="header__higher" style={{display:displayHeaderInfo}}>
                        <div className="header__higher-info">
                            <div className="header__higher-info-mail">
                                <i className="fa-solid fa-envelope"></i>
                                <span>petsla.vn@gmail.com</span>
                            </div>
                            <div className = "divide">
                            </div>
                            <div className="header__higher-info-phone">
                                <i className="fa-solid fa-phone"></i>
                                <span>0123 456 789</span>
                            </div>
                        </div>
                        <div className="header__higher-btn-wrap">
                            <div className="btn-language-wrap">
                                <i className="fa-solid fa-earth-americas"></i>
                            </div>
                            <div className="btn-theme-wrap">
                                <i className="fa-solid fa-moon"></i>
                            </div>
                            <div className="btn-auth-wrap">
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__top grid wide">
                <div className = "header__wrap">
                    <div className = "header__logo">
                        <img className = "header__logo__img" src = {"https://www.leoasher.dev/static/media/logofull.f2aa3784.png"}/>
                    </div>
                    <div className = "header__search">
                        <input className = "header__search__input" placeholder="Everything here is better than your ex" type = "text" />
                        <i className ="header__search__icon fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className = "header__cart">
                        <i className ="header__cart__icon fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div className ="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                             <Link to="/home" className="header__nav-item-link">
                                Home
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/shop" className="header__nav-item-link">
                                Shop
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/cart" className="header__nav-item-link">
                                Cart
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/contact" className="header__nav-item-link">
                                Contact
                            </Link>
                        </li>
                        <li className="header__nav-item"> 
                            <Link to="/account" className="header__nav-item-link">
                                Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}