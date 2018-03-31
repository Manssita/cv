import React from "react";
import "./styles.css";
import Link from "./Link";
import Competences from "./Competences";

class CompetencesAndLink extends React.Component {
  render() {
    return (
      <div className="col-lg-6 space justify-content-center center reverseLink">
        <Link />
        <Competences />
      </div>
    );
  }
}

export default CompetencesAndLink;
