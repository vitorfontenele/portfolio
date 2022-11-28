import "./style.css";

const SectionHero = () => {
    return (
        <section id="hero">
            <h3 id="hero-hello" className="highlight-text">Olá, meu nome é</h3>
            <h1 id="hero-my-name">Vitor Fontenele.</h1>
            <h2 id="hero-my-job">Eu sou um Web Dev.</h2>
            <p id="hero-about" className="section-p">Eu sou um Desenvolvedor Web atualmente cursando o bootcamp da Labenu e construindo projetos que me permitam desenvolver as minhas habilidades.</p>
            <button id="hero-button" className="highlight-text">Meu currículo</button>
        </section>
    )
}

export default SectionHero;