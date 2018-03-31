import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Infos from "./components/Infos";
import Experiences from "./components/Experiences";
import CompetencesAndLink from "./components/CompetencesAndLink";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Infos />
        <div className="container">
          <div className="row align-items-center">
            <Experiences />
            <CompetencesAndLink />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
