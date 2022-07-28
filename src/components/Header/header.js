import "./header.css"
import "../../grid.css"

export default function Header() {
    return (
        <header className = "header grid wide">
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
        </header>
    )
}