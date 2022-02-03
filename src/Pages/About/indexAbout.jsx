import React from "react";
import Menus from "../../Components/Menus/index.Menus";
import Footer from "../../Components/Footer/indexFooter";
import Image from "../../Components/Images/index.Images";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllDataAbout } from "../../store/About/action";

function About() {
  const dispatch = useDispatch();
  const dataAbout = useSelector((state) => state.reducerAbout);

  React.useEffect(() => {
    dispatch(getAllDataAbout());
  }, []);

  return (
    <div className="MainPageContainer">
      <Menus />
      <div className="aboutContent">
        <h1>
          Criar. Compartilhar. Repetir ... <i class="ri-refresh-line" />
        </h1>

        <p className="title">Biografia</p>
        <div className="aboutBox">
          <Image radius="2rem" src={"https://github.com/lucasdorador.png"} />
          <span>
            {dataAbout.biography}
            {/* <strong>Olá</strong> meu nome é Lucas e me considero um apaixonado
            por tecnologia! Estou cada vez em busca de mais conhecimento,
            principalmente na área de desenvolvimento web, mobile e desktop, que
            sempre foram o meu maior foco profissionalmente. <br />
            <strong>O</strong> meu primeiro contato com a tecnologia foi em
            2005, com 15 anos de idade, quando fui estagiário e posteriormente
            professor dos cursos de Web Designer e Pacote Office. E hoje
            bacharel em Ciência da Computação pela Universidade do Sagrado
            Coração, agora conhecida como Unisagrado de Bauru/SP e Pós Graduado
            pela mesma instituição na área de Gestão e Governança de tecnologia.
            Assim que finalizei a graduação iniciei como desenvolvedor de ERP na
            linguagem Delphi por 5 anos e atualmente lidero um time ágil de
            desenvolvedores web, com o desafio de atuar junto com os diretores
            da empresa para criar e expandir a aplicação web utilizando NodeJS,
            React, React Native e realizar os deploys em servidores Amazon.
            <br />
            <strong>Busco</strong> sempre me conectar com novas pessoas e
            aprender mais ainda sobre tecnologia, novos processos e novas
            metodologias. Além de trabalhar com o desenvolvimento de softwares
            para poder colaborar não só com o meu crescimento profissional, como
            ajudar a todos que estiverem ao meu redor se torna algo
            gratificante. Procuro cada vez mais melhorar o relacionamento com as
            pessoas para poder trabalhar em um grupo harmônico, pois acredito
            que sem isso não exista sucesso. Estou sempre aberto para ouvir
            novas ideias, opiniões e trabalhar em novos projetos.*/}
          </span>
        </div>
        <div className="careerContent">
          <p className="title">Carreira</p>

          {dataAbout &&
            dataAbout.career &&
            dataAbout.career.length > 0 &&
            dataAbout.career.map((career, idx) => (
              <div className="careerBox" key={idx}>
                <strong>{career.occupation}</strong>
                <span>
                  <a href={`${career.urlCompany}`}>{career.company}</a>
                  {" • "}
                  {career.city}
                </span>
                <p>{career.period}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
