import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import { Parallax } from "react-scroll-parallax";
import Game from "../../components/Game/Board";
import Carousel from "nuka-carousel";
import BoomLogin from "../../Images/boomLogin.png";
import BoomItems from "../../Images/boomItems.png";
import BoomShare from "../../Images/boomShare.png";
import BoomProfile from "../../Images/boomProfile.png";
import r10About from "../../Images/r10About.png";
import r10Faves from "../../Images/r10Faves.png";
import r10Schedule from "../../Images/r10Schedule.png";
import r10Session from "../../Images/r10Session.png";
import r10Speaker from "../../Images/r10Speaker.png";

function Projects({ id }) {
  return (
    <div id={id} className="Projects">
      <h1 className="heading-primary">Projects</h1>

      <h1 className="heading-secondary">Scary Squares</h1>

      <div className="game-container">
        <Game />
      </div>

      <h1 className="heading-secondary">Boomtown</h1>

      <div className="carousel-container">
        <Carousel width="62.5%">
          <img src={BoomLogin} />
          <img src={BoomItems} />
          <img src={BoomShare} />
          <img src={BoomProfile} />
        </Carousel>
      </div>

      <h1 className="heading-secondary">R10</h1>

      <div className="carousel-container">
        <Carousel width="30%" initialSlideHeight="20">
          <img src={r10About} />
          <img src={r10Schedule} />
          <img src={r10Faves} />
          <img src={r10Session} />
          <img src={r10Speaker} />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
