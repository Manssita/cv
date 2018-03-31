import React from "react";
import "./styles.css";

class Experiences extends React.Component {
  render() {
    return (
      <div className="col-lg-6 borderExperience space justify-content-center center">
        <h2>EXPÉRIENCE</h2>
        <h3>
          Intégrateur / Développeur Front | Grenade & Sparks – Asnières sur
          Seine | 2012 - 2015
        </h3>
        <p>
          Intégration et gestion de contenu, Intégration de sites, Intégrations
          et routage de campagnes emailing, Animations CSS3, Intégration
          responsive, Gestion de projets, Recettage de sites, Référencement
          naturel SEO
        </p>
        <p>
          Comptes : Disney, Printemps, Kiloutou, L'Oréal, Orange, Sosh,
          Christofle, La Poste, Bosch, ELM Leblanc, Amplifon, Assa Abloy, La
          Croissanterie
        </p>
        <h2>FORMATION</h2>
        <h3>2018 | Le Reacteur - Paris</h3>
        <p>
          Bootcamp Full-Stack Javascript (GitHub, JavaScript, HTML5, CSS3,
          Bootstrap, JQuery, Node.js, Express, MongoDB, Heroku, mLab, React.js,
          React Native)
        </p>
        <h3>2014 | AlterWay – Saint-Cloud</h3>
        <p>Formation HTML5, CSS3, Javascript</p>
        <h3>2011 | Ifocop – Paris</h3>
        <p>Formation Développeur Intégrateur</p>
        <h3>2010 | Université Paris VIII – Saint-Denis</h3>
        <p>Licence Information et Communication option multimédia</p>
      </div>
    );
  }
}

export default Experiences;
