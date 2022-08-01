import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import {themeColor,themeHandle} from "../../app.js"

export default function Footer() {
    const color = useContext(themeColor);
    const handleChangePage = useContext(themeHandle);
    
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer__banner">
                    <img src = {"https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png"} className="footer__banner-img"/>
                </div>
                <div className="footer__contain grid wide">
                    <div className="footer__contain-wrap">
                        <div className="col l-4 c-4 mb-12">
                            <div className="about-us">
                                <h3>Về PetLa</h3>
                                <p>
                                    PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
                                </p>
                            </div>
                        </div>
                        <div className="col l-4 c-4 mb-0"></div>
                        <div className="col l-4 c-4 mb-12">
                            <div className="follow-us">
                                <h3>Follow Us</h3>
                                <div className="follow-us-wrap">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom__nav-mobile" style={{display:"none"}}>
                <ul className="bottom__nav-list-mobile">
                    <li className="bottom__nav-item-mobile col mb-3">
                        <Link to="/" className="bottom__nav-item-mobile-link" onClick={handleChangePage} id={5} style={{color:color[0]}}>
                           
                            <i className="fa-solid fa-house"></i>
                            <div>Home</div>
                        </Link>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <Link to="/shop" className="bottom__nav-item-mobile-link" onClick={handleChangePage} id={6} style={{color:color[1]}}>
                   
                            <i className="fa-solid fa-shop"></i>
                            <div>Shop</div>
                        </Link>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <Link to="/cart" className="bottom__nav-item-mobile-link" onClick={handleChangePage} id={7} style={{color:color[2]}}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div>Cart</div>
                       </Link>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <Link to="/contact" className="bottom__nav-item-mobile-link" onClick={handleChangePage} id={8} style={{color:color[3]}}>
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            <div>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}