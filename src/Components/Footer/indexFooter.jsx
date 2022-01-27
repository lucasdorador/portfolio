import React from "react";

// import { Container } from './styles';

function Footer() {
  const links = [
    {
      title: "source",
      url: "https://github.com/lucasdorador/portfolio",
      icon: "ri-braces-line",
    },
    {
      title: "github",
      url: "https://github.com/lucasdorador/",
      icon: "ri-github-line",
    },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/lucasdorador/",
      icon: "ri-linkedin-fill",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/lucasdorador/",
      icon: "ri-instagram-line",
    },
    {
      title: "facebook",
      url: "https://www.facebook.com/lucas.f.dorador",
      icon: "ri-facebook-fill",
    },
  ];

  return (
    <footer className="mainFooter">
      {links.map((link, idx) => (
        <a key={idx} target="_blank" rel="noreferrer" href={link.url}>
          <span>{link.title}</span>
          <i className={link.icon} />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
