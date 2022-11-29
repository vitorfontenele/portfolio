import "./style.css";

const SectionOtherProjects = () => {
    return (
     <section id="other-projects">
        <h3 id="other-projects-title" className="section-title">Outros projetos</h3>
        <h4 id="other-projects-subtext" className="highlight-text">Projetos secundários</h4>
        <div className="grid-area">
            <article className="other-proj-article">
                <div className="other-proj-top">
                    <div className="logos-row">
                        <div>
                            <img className="link-logo" src="github-logo.svg"></img>
                        </div>
                        <div className="second-group-logos">
                            <img className="link-logo" src="github-logo.svg"></img>
                            <img className="link-logo" src="external-link.svg"></img>
                        </div>
                    </div>
                    <h4 className="other-proj-title">Compras em dólar no cartão de crédito</h4>
                    <p className="other-proj-description">Um projeto cujo objetivo é mostrar quanto custa uma compra internacional feita no cartão de crédito, mostrando o valor da compra em reais.</p>
                </div>
                <div className="other-proj-down">
                    <ul className="other-proj-techs">
                        <li className="other-proj-tech">APIs</li>
                        <li className="other-proj-tech">JQuery</li>
                        <li className="other-proj-tech">Bootstrap</li>
                    </ul>
                </div>
            </article>
            <article className="other-proj-article">
                <div className="other-proj-top">
                    <div className="logos-row">
                        <div>
                            <img className="link-logo" src="github-logo.svg"></img>
                        </div>
                        <div className="second-group-logos">
                            <img className="link-logo" src="github-logo.svg"></img>
                            <img className="link-logo" src="external-link.svg"></img>
                        </div>
                    </div>
                    <h4 className="other-proj-title">Editor de Markdown</h4>
                    <p className="other-proj-description">Um editor de código de linguagem Markdown, que mostra um preview do seu código na linguagem.</p>
                </div>
                <div className="other-proj-down">
                    <ul className="other-proj-techs">
                        <li className="other-proj-tech">NPM</li>
                        <li className="other-proj-tech">React</li>
                        <li className="other-proj-tech">CSS</li>
                    </ul>
                </div>
            </article>
            <article className="other-proj-article">
                <div className="other-proj-top">
                    <div className="logos-row">
                        <div>
                            <img className="link-logo" src="github-logo.svg"></img>
                        </div>
                        <div className="second-group-logos">
                            <img className="link-logo" src="github-logo.svg"></img>
                            <img className="link-logo" src="external-link.svg"></img>
                        </div>
                    </div>
                    <h4 className="other-proj-title">Resultado das eleições</h4>
                    <p className="other-proj-description">Projeto que consome a API do TSE em tempo real para mostrar o resultado das eleições no Segundo Turno.</p>
                </div>
                <div className="other-proj-down">
                    <ul className="other-proj-techs">
                        <li className="other-proj-tech">APIs</li>
                        <li className="other-proj-tech">DOM</li>
                        <li className="other-proj-tech">Bootstrap</li>
                    </ul>
                </div>
            </article>
        </div>
     </section>
     )
}

export default SectionOtherProjects;