import "./style.css";

const SectionHero = () => {
    return (
        <section id="hero" data-aos="fade-right" data-aos-duration="1000">
            <h3 id="hero-hello" className="highlight-text">Olá, meu nome é</h3>
            <h1 id="hero-my-name">Vitor Fontenele.</h1>
            <h2 id="hero-my-job">Eu sou um Web Dev.</h2>
            <p id="hero-about" className="section-p">Eu sou um Desenvolvedor Web atualmente cursando o bootcamp da Labenu e construindo projetos que me permitam desenvolver as minhas habilidades.</p>
            <div id="hero-links">
                <a href="https://www.linkedin.com/in/vitor-fontenele/" id="hero-link-linkedin" className="highlight-text hero-link" target="_blank">Meu Linkedin</a>
                <a href="https://github.com/vitorfontenele" id="hero-link-github" className="hero-link" target="_blank">Meu Github</a>
            </div>
        </section>
    )
}

export default SectionHero;