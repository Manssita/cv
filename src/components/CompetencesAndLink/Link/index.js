import React from "react";
import "./styles.css";

class Link extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>
              <span className="picto">
                <i class="far fa-envelope" />
              </span>
              <a href="mailto:ssitakeita@gmail.com">ssitakeita@gmail.com</a>
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              <span className="picto">
                <i class="fas fa-mobile-alt" />
              </span>
              <a href="tel:0650795509">0650795509</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              <span className="picto">
                <i class="fab fa-linkedin-in" />
              </span>
              <a
                href="https://www.linkedin.com/in/manssita-keita-ab459a72/"
                target="_blank"
              >
                https://www.linkedin.com/in/manssita-keita-ab459a72/
              </a>
            </p>
            <p>
              <span className="picto">
                <i class="fab fa-github" />
              </span>
              <a href="https://github.com/Manssita" target="_blank">
                https://github.com/Manssita
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Link;
