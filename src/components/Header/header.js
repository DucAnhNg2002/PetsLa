import React from "react"
import { useState } from "react"
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
            <div className="header__top grid wide">
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
                    
                </div>
            </div>
        </header>
    )
}