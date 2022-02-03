import React from "react";
import api from "../../services/api";
// import { Container } from './styles';

function Footer() {
  // const links = [
  //   {
  //     title: "source",
  //     url: "https://github.com/lucasdorador/portfolio",
  //     icon: "ri-braces-line",
  //   },
  //   {
  //     title: "github",
  //     url: "https://github.com/lucasdorador/",
  //     icon: "ri-github-line",
  //   },
  //   {
  //     title: "linkedin",
  //     url: "https://www.linkedin.com/in/lucasdorador/",
  //     icon: "ri-linkedin-fill",
  //   },
  //   {
  //     title: "instagram",
  //     url: "https://www.instagram.com/lucasdorador/",
  //     icon: "ri-instagram-line",
  //   },
  //   {
  //     title: "facebook",
  //     url: "https://www.facebook.com/lucas.f.dorador",
  //     icon: "ri-facebook-fill",
  //   },
  // ];

  const [dataSocialMediaSupabase, setDataSocialMediaSupabase] = React.useState(
    {}
  );

  const getAllMediaSupabase = async () => {
    try {
      const { data } = await api.get("/rest/v1/social_media?select=*");
      setDataSocialMediaSupabase(data[0]);
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    getAllMediaSupabase();
  }, []);

  return (
    <footer className="mainFooter">
      {dataSocialMediaSupabase &&
        dataSocialMediaSupabase.all_media &&
        dataSocialMediaSupabase.all_media.length > 0 &&
        dataSocialMediaSupabase.all_media.map((link, idx) => (
          <a key={idx} target="_blank" rel="noreferrer" href={link.url}>
            <span>{link.title}</span>
            <i className={link.icon} />
          </a>
        ))}
    </footer>
  );
}

export default Footer;
