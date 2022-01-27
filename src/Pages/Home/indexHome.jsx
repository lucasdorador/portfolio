import React from "react";
import Menus from "../../Components/Menus/index.Menus";
import Footer from "../../Components/Footer/indexFooter";

function Home() {
  return (
    <div className="MainPageContainer">
      <Menus />
      <div className="bodyContainer">
        <div className="post-content">
          <h1>Lucas Dorador Fornaciari</h1>
          <p>
            <strong>
              Desenvolvedor Web FullStack nas linguagens:
              <span> NodeJs, React (Javascript e Typescript) e NextJs.</span>
            </strong>
            <br />
            Trabalhando para transformar ideias em código.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
