import React from "react";
import Styles from "./styles.Home.module.css";
import Images from "../../Components/Images/index.Images";
import lucas_home from "../../Assets/lucas_home.jpg";
import logoLinkedin from "../../Assets/linkedin.png";
import Menus from "../../Components/Menus/index.Menus";

function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.bodyContainer}>
        <Menus />
        <div className={Styles.divImageText}>
          <Images src={lucas_home} />
          <p className={Styles.titlePresentation}>Olá, eu sou o Lucas!</p>
          <p className={Styles.titleSecundaryPresentation}>
            Desenvolvedor FullStack, trabalhando para transformar ideias em
            código.
          </p>
          <div className={Styles.divSocial}>
            <a href="https://www.linkedin.com/in/lucasdorador/">
              <Images src={logoLinkedin} width="3.5rem" height="3.5rem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
