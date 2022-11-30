import "./style.css";

const Header = () => {
    return (
        <header id="header" data-aos="fade-up" data-aos-duration="1000">
            <nav>
                <ul id="nav-list">
                    <li className="nav-item"><a href="#hero" className="nav-link"><span className="nav-item-number highlight-text">01. </span>Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link"><span className="nav-item-number highlight-text">02. </span>Sobre</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link"><span className="nav-item-number highlight-text">03. </span>Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;