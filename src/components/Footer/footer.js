import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__banner">
                <img src = "https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" className="footer__banner-img"/>
            </div>
            <div className="footer__contain grid wide">
                <div className="footer__contain-wrap">
                    <div className="col l-4">
                        <div className="about-us">
                            <h3>Về PetLa</h3>
                            <p>
                                PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
                            </p>
                        </div>
                    </div>
                    <div className="col l-4 c-4"></div>
                    <div className="col l-4 c-4">
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
    )
}