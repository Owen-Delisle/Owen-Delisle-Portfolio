import React, { Component, Fragment } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Scrollchor from "react-scrollchor";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header />
        <Home id="home" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Contact id="contact" />
      </section>
    );
  }
}

export default App;
