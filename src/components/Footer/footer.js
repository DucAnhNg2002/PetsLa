import React, { useContext } from "react";
import { Link,NavLink } from "react-router-dom";

import "./footer.css";
export default function Footer() {
    
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
                        <NavLink to="/" className="bottom__nav-item-mobile-link">
                           
                            <i className="fa-solid fa-house"></i>
                            <div>Home</div>
                        </NavLink>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <NavLink to="/shop" className="bottom__nav-item-mobile-link">
                   
                            <i className="fa-solid fa-shop"></i>
                            <div>Shop</div>
                        </NavLink>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <NavLink to="/cart" className="bottom__nav-item-mobile-link">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div>Cart</div>
                       </NavLink>
                    </li>
                    <li className="bottom__nav-item-mobile col mb-3">
                        <NavLink to="/contact" className="bottom__nav-item-mobile-link">
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            <div>Contact</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}