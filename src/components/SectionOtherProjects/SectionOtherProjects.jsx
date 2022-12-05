import "./style.css";
import GithubLogo from "../Icons/GithubLogo";
import ExternalLinkLogo from "../Icons/ExternalLinkLogo";
import Folder from "../Icons/Folder";

const SectionOtherProjects = () => {
    return (
     <section id="other-projects" data-aos="fade-up" data-aos-duration="1000">
        <h3 id="other-projects-title" className="section-title">Outros projetos</h3>
        <h4 id="other-projects-subtext" className="highlight-text">Projetos secundários</h4>
        <div className="grid-area">
            <article className="other-proj-article">
                <div className="other-proj-top">
                    <div className="logos-row">
                        <div>
                            <Folder />
                        </div>
                        <div>
                            <ul className="second-group-logos">
                                <li><a className="github-anchor" href="https://github.com/vitorfontenele/converter-compra-em-dolar-no-cartao-para-real" target="_blank"><GithubLogo /></a></li>
                                <li><a className="external-link-anchor" href="https://vitorfontenele.github.io/converter-compra-em-dolar-no-cartao-para-real/" target="_blank"><ExternalLinkLogo /></a></li>
                            </ul>                           
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
                            <Folder />
                        </div>
                        <div>
                            <ul className="second-group-logos">
                                <li><a className="github-anchor" href="https://codepen.io/vitorfontenele/pen/ZEvqjoe" target="_blank"><GithubLogo /></a></li>
                                <li><a className="external-link-anchor" href="https://codepen.io/vitorfontenele/pen/ZEvqjoe" target="_blank"><ExternalLinkLogo /></a></li>
                            </ul>                           
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
                            <Folder />
                        </div>
                        <div>
                            <ul className="second-group-logos">
                                <li><a className="github-anchor" href="https://github.com/vitorfontenele/eleicoes-brasil" target="_blank"><GithubLogo /></a></li>
                                <li><a className="external-link-anchor" href="https://vitorfontenele.github.io/eleicoes-brasil/" target="_blank"><ExternalLinkLogo /></a></li>
                            </ul>                           
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