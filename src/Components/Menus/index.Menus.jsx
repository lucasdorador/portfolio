import React from "react";

function Menus() {
  return (
    <header className="mainHeader">
      <a className="logoHeader" href="/">
        L <span>DF</span>
      </a>
      <nav className="navHeader">
        <ul>
          <li className="listItems">
            <a href="/about">
              <span>Sobre</span>
            </a>
          </li>
          <li className="listItems">
            <a href="/contact">
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Menus;
