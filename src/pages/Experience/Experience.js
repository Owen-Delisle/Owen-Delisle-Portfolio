import React from "react";
import "./styles.css";
import StackList from "../../components/StackList";

function Experience({ id }) {
  return (
    <div id={id} className="Experience">
      <h1 className="heading-primary">Experience</h1>
      <div className="Global__container">
        <h2 className="heading-secondary">
          <img
            src="http://www.business2mobile.com/assets/images/ac99ae5640e944dd38c7dc82d7d55444_LetterheadLogo.png"
            className="img"
          />
        </h2>
        <p className="description-text">
          Business2Mobile is a two person tech company based out of Prince
          George BC that specialises in developing business solutions for
          industrial and resource companies.
        </p>
        <br />
        <p className="description-text">
          I completed an intenship at Business2Mobile between my first and
          second year at college. I was introduced to Javascript, NodeJS and
          working with Node servers.
        </p>
        <br />
        <p className="description-text">
          I worked on was a website allowing tree planters to apply to companies
          online. I re-wrote a a PDF program allowing users to put forms on PDF
          files. The original code had been obscurified, making it extremely
          difficult to read and edit.
        </p>

        <br />
        <p className="description-text">
          I also created a website that allowed users to control a toy BB8
          robot. I was able to create a NodeJS server that allowed a Javascript
          program to relay commands to the robot. This included commands such
          as; driving, color changing and various noises.
        </p>

        <h2 className="heading-secondary">
          <img
            src="https://pbs.twimg.com/media/DiNi5pVXcAAU4C9.jpg"
            className="img"
          />
        </h2>
        <p className="description-text">
          Sparkgeo is a geospatial tech company also based in Prince George BC.
          I completed a three month internship at Sparkgeo after my second year
          at college. I experiences how a tech company operates and contributed
          to developing features into a live web app
        </p>
        <br />
        <p className="description-text">
          The web app I spent most of my time working on was called Maptiks.
          Maptiks is a analytics tool for web maps. It tracks metrics like load
          time, bounce rates, average visitor duration and much more.
        </p>
        <br />
        <p className="description-text">
          I developed an internal administrator dashboard that shows specific
          user information. I created a dynamic table that loaded any and all
          data about one or multiple specific users fitting the search criteria.
          I wrote this dashboard in Angular 4 and was able to load real data
          from the Maptiks user API.
        </p>
        <StackList />
      </div>
    </div>
  );
}

export default Experience;
