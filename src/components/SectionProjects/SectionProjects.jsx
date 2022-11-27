import "./style.css";

const SectionProjects = () => {
    return (
        <section id="projects">
            <h2 className='section-title'>Projetos</h2>
            <article className="project">
                <div className="project-banner">
                    <img src="weather-app-brasil.jpg" alt="Weather App Brasil Printscreen"/>
                </div>
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
            </article>
        </section>
    )
}

export default SectionProjects;