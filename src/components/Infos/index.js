import React from "react";
import "./styles.css";

class Infos extends React.Component {
  render() {
    return (
      <div className="container top">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 d-flex justify-content-center center space">
            <p className="infos">
              Manssita KEITA<br />
              3 rue Claude Debussy<br />
              60800 Crépy en Valois<br />
              30 ans<br />
              Véhiculée
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center pic space">
            <img className="picture" src="./mk.jpeg" alt="Manssita Keita" />
          </div>
        </div>
      </div>
    );
  }
}

export default Infos;
