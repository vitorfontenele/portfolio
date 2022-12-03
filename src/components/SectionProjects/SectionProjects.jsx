import "./style.css";

const SectionProjects = () => {
    return (
        <section id="projects" data-aos="fade-up" data-aos-duration="1000">
            <h2 className='section-title'>Projetos</h2>
            <article className="project">
                <div className="project-banner" style={{background: "url('weather-app-brasil.jpg')", backgroundSize: "cover"}}>
                    {/* <img src="weather-app-brasil.jpg" alt="Weather App Brasil Printscreen"/> */}
                    <div className="cover-layer"></div>
                </div>
                <div className="project-info">
                    <h4 className="highlight-text">Projeto em React</h4>
                    <h3 className="project-name">Weather App Brasil</h3>
                    <p className="section-p project-p">O Weather App Brasil é um aplicativo que consome as APIs do OpenWeather, voltado para condições meteorológicas em cidades do Brasil. Permite explorar as cidades também através da seleção por estados.</p>
                    <ul className="project-techs">
                        <li className="project-tech">React</li>
                        <li className="project-tech">React Hooks</li>
                        <li className="project-tech">API Rest</li>
                        <li className="project-tech">SVG</li>
                    </ul>
                    <ul className="project-links">
                        <li><a href=""><img className="proj-link-image" src="github-logo.svg" /></a></li>
                        <li><a href=""><img className="proj-link-image" src="external-link.svg" /></a></li>
                    </ul>
                </div>                
            </article>
            <article className="project">
                <div className="project-banner" style={{background: "url('shopping-cart.jpg')", backgroundSize: "cover"}}>
                    {/* <img src="shopping-cart.jpg" alt="Shopping Cart Printscreen"/> */}
                    <div className="cover-layer"></div>
                </div>
                <div className="project-info">
                    <h4 className="highlight-text">Projeto em React</h4>
                    <h3 className="project-name">Shopping Cart</h3>
                    <p className="section-p project-p">O Shopping Cart simula um ambiente de compras online, com um carrinho de compras, como é comum em um e-commerce tradicional, O projeto tem a temática do jogo Kerbal Space Program.</p>
                    <ul className="project-techs">
                        <li className="project-tech">React</li>
                        <li className="project-tech">React Hooks</li>
                        <li className="project-tech">CSS Animations</li>
                        {/* <li className="project-tech">SVG</li> */}
                    </ul>
                    <ul className="project-links">
                        <li><a href=""><img className="proj-link-image" src="github-logo.svg" /></a></li>
                        <li><a href=""><img className="proj-link-image" src="external-link.svg" /></a></li>
                    </ul>
                </div>                
            </article>
            <article className="project">
                <div className="project-banner" style={{background: "url('projeto-intro-web.jpg')", backgroundSize: "cover"}}>
                    {/* <img src="projeto-intro-web.jpg" alt="Projeto Intro Web Printscreen"/> */}
                    <div className="cover-layer"></div>
                </div>
                <div className="project-info">
                    <h4 className="highlight-text">Projeto em JS Vanilla</h4>
                    <h3 className="project-name">Projeto Intro Web</h3>
                    <p className="section-p project-p">O Projeto Intro Web foi o primeiro projeto desenvolvido no bootcamp da Labenu, com a apresentação dos primeiros conceitos relacionados ao Desenvolvimento Web. É um site simples cujo objetivo foi testar o aprendizado de conceitos como tags HTML e responsividade.</p>
                    <ul className="project-techs">
                        <li className="project-tech">HTML</li>
                        <li className="project-tech">CSS</li>
                        <li className="project-tech">Javascript</li>
                        {/* <li className="project-tech">SVG</li> */}
                    </ul>
                    <ul className="project-links">
                        <li><a href=""><img className="proj-link-image" src="github-logo.svg" /></a></li>
                        <li><a href=""><img className="proj-link-image" src="external-link.svg" /></a></li>
                    </ul>
                </div>                
            </article>
        </section>
    )
}

export default SectionProjects;