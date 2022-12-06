import "./style.css";
import { useState , useEffect } from "react";

const Header = () => {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [shadow, setShadow] = useState(false);

    const controlNavbar = () => {
        setShow(current => !current);
    }

    useEffect(() => {
        const handleScroll = () => {
            // Hide or show header
            const moving = window.pageYOffset;
            setVisible(position > moving);
            setPosition(moving);

            // Shadow or un-shadow header
            setShadow(window.pageYOffset > 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    const hideMenu = () => {
        setShow(false);
    }

    const clsVisible = visible ? "visible" : "hidden";
    const clsShadow = shadow ? "shadow" : "unshadow";

    return (
        <header id="header" className={`${clsVisible} ${clsShadow}`} data-aos="fade-up" data-aos-duration="1000">
            <nav id="navbar" className={show ? "show" : ""}>
                <ul id="nav-list">
                    <li className="nav-item"><a onClick={hideMenu} href="#hero" className="nav-link"><span className="nav-item-number highlight-text">01. </span>Home</a></li>
                    <li className="nav-item"><a onClick={hideMenu} href="#about" className="nav-link"><span className="nav-item-number highlight-text">02. </span>Sobre</a></li>
                    <li className="nav-item"><a onClick={hideMenu} href="#projects" className="nav-link"><span className="nav-item-number highlight-text">03. </span>Projetos</a></li>
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