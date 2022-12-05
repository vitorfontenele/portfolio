import "./style.css";
import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        setShow(current => !current);
    }

    return (
        <header id="header" data-aos="fade-up" data-aos-duration="1000">
            <nav id="navbar" className={show ? "show" : ""}>
                <ul id="nav-list">
                    <li className="nav-item"><a href="#hero" className="nav-link"><span className="nav-item-number highlight-text">01. </span>Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link"><span className="nav-item-number highlight-text">02. </span>Sobre</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link"><span className="nav-item-number highlight-text">03. </span>Projetos</a></li>
                </ul>
            </nav>
            <div id="hamburguer-menu" onClick={controlNavbar}>
                <div id="hamburguer-menu-icon">
                    <span className="hamburguer-line"></span>
                    <span className="hamburguer-line"></span>
                    <span className="hamburguer-line"></span>
                </div>
            </div>
        </header>
    )
}

export default Header;