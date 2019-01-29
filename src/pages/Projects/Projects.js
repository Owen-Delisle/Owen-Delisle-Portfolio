import React from "react";
import "./styles.css";
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
import GCSC1 from "../../Images/GC/GC SC 1.png";
import GCSC2 from "../../Images/GC/GC SC 2.png";
import GCSC3 from "../../Images/GC/GC SC 3.png";
import GCSC4 from "../../Images/GC/GC SC 4.png";
import GCSC5 from "../../Images/GC/GC SC 5.png";
import GCSC6 from "../../Images/GC/GC SC 6.png";
import GCSC7 from "../../Images/GC/GC SC 7.png";
import GCSC8 from "../../Images/GC/GC SC 8.png";
import GCSC9 from "../../Images/GC/GC SC 9.png";
import GCSC10 from "../../Images/GC/GC SC 10.png";
import GCSC11 from "../../Images/GC/GC SC 11.png";
import GCSC12 from "../../Images/GC/GC SC 12.png";
import GCSC13 from "../../Images/GC/GC SC 13.png";
import GCSC14 from "../../Images/GC/GC SC 14.png";
import GCSC15 from "../../Images/GC/GC SC 15.png";
import GCSC16 from "../../Images/GC/GC SC 16.png";

function Projects({ id }) {
  return (
    <div id={id} className="Projects">
      <h1 className="heading-primary">Projects</h1>

      <h1 className="heading-secondary">Scary Squares</h1>

      <div className="desc-container">
        <p className="description-text u-margin-btm-md">
          Scary Squares is a 2d platformer video game written entirely in
          JavaScript and uses JavaScript canvas for the graphics. The object of
          the game is to collect as many green paddles as you can while avoiding
          the sawblades and sticky red paddles. Try it out below!
        </p>
      </div>

      <div className="game-container">
        <Game />
      </div>

      <h1 className="heading-secondary">Boomtown</h1>

      <div className="desc-container">
        <p className="description-text u-margin-btm-md">
          Boomtown is a social media project that allows users to Post and
          Borrow Items.
        </p>
      </div>

      <div className="carousel-container">
        <Carousel width="62.5%">
          <img src={BoomLogin} />
          <img src={BoomItems} />
          <img src={BoomShare} />
          <img src={BoomProfile} />
        </Carousel>
      </div>

      <h1 className="heading-secondary">R10</h1>

      <div className="desc-container">
        <p className="description-text u-margin-btm-md">
          R10 is a scheduling app that shows users a list of presentations at an
          upcoming event. Users are able to see information about each
          presentation as well as the speaker. They can also favourite talks.
        </p>
      </div>

      <div className="carousel-container">
        <Carousel width="30%" initialSlideHeight="20">
          <img src={r10About} />
          <img src={r10Schedule} />
          <img src={r10Faves} />
          <img src={r10Session} />
          <img src={r10Speaker} />
        </Carousel>
      </div>

      <h1 className="heading-secondary">Ground Control</h1>

      <div className="desc-container">
        <p className="description-text u-margin-btm-md">
          Ground Control is a Physiotherapy excersice app. The app was created
          for a client who owns a Physiotherapy clinic and wanted to give his
          clients a way to excercise at home and track their progress. The app
          also has a coach access feature allowing coaches to track their
          client's progress.
        </p>
      </div>

      <div className="carousel-container">
        <Carousel
          width="30%"
          initialSlideHeight="20"
          renderBottomCenterControls={false}
        >
          <img src={GCSC1} />
          <img src={GCSC2} />
          <img src={GCSC3} />
          <img src={GCSC4} />
          <img src={GCSC5} />
          <img src={GCSC6} />
          <img src={GCSC7} />
          <img src={GCSC8} />
          <img src={GCSC9} />
          <img src={GCSC10} />
          <img src={GCSC11} />
          <img src={GCSC12} />
          <img src={GCSC13} />
          <img src={GCSC14} />
          <img src={GCSC15} />
          <img src={GCSC16} />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
