import "./style.css";

const SectionAbout = () => {
    return (
        <section id="about">
            <h2 className='section-title'>Sobre</h2>
            <div id="about-body">
                <div id="about-text">
                    <p className='about-p section-p'>Olá! Meu nome é Vitor e amo criar aplicações voltadas para Internet. Meu interesse por Desenvolvimento Web começou quando tive acesso pela primeira vez aos cursos do freeCodeCamp em 2022 - ali eu dava meus primeiros passos com Javascript.</p>
                    <p className='about-p section-p'>Atualmente, curso o bootcamp da Labenu voltado para o aprendizado de <span className="highlight-text">Desenvolvimento Web Full-Stack</span>. A cada semana, participo da criação de novos projetos, com diferentes tecnologias e frameworks.</p>
                    <p className='about-p section-p'>Venho de um background de Engenharia Mecânica, graduação que concluí em 2021 na UFRJ e que me deu o primeiro contato com programação.</p>
                </div>
                <div id="about-photo">
                    <img src="vitor-fontenele.jpg" alt="Vitor Fontenele"/>
                    <div id="about-photo-dec"></div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout;