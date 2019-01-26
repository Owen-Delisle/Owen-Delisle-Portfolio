import React from "react";
import "./styles.css";
import StackList from "../../components/StackList";

function Experience({ id }) {
  return (
    <div id={id} className="Experience">
      <h1 className="heading-primary">Experience</h1>
      <div className="Experience__container">
        <h2 className="heading-secondary">
          <img
            src="http://www.business2mobile.com/assets/images/ac99ae5640e944dd38c7dc82d7d55444_LetterheadLogo.png"
            width="550"
            height="100"
          />
        </h2>
        <p className="description-text">
          Business2Mobile is a two person tech company based out of Prince
          George BC that specialises in developing business solutions for
          industrial and resource companies.
        </p>
        <br />
        <p className="description-text">
          Business2Mobile is where I did my first internship between my first
          and second year at college. I was intraduced to Javascript, NodeJS and
          working with Node servers. I was only there long enough to work on a
          two projects.
        </p>
        <br />
        <p className="description-text">
          The first thing I got to work on was a website for tree planters to
          apply to companies online instead of going into an office. We did this
          my re writing a PDF program that allowed users to put forms on PDF
          files. The programs code I was re writing had been obscurified which
          made it extremely difficult to read and edit.
        </p>

        <br />
        <p className="description-text">
          The second project I got to work on was creating a website that
          allowed users to control a toy BB8 robot. I didn't finish this
          project, however I was able to create a NodeJS server that could
          allowed a Javascript program to relay commands to the robot. This
          included commands such as; driving, color changing and various noises.
        </p>

        <h2 className="heading-secondary">
          <img
            src="https://pbs.twimg.com/media/DiNi5pVXcAAU4C9.jpg"
            width="550"
            height="100"
          />
        </h2>
        <p className="description-text">
          Sparkgeo is a geospatial tech company also based in Prince George BC.
          I was fortunate enough to have a three month internship there after my
          second year at college. I was able to see how a tech company operates
          and got to take part it developing features into a live web app
        </p>
        <br />
        <p className="description-text">
          The web app I spent most of my time working on was called Maptiks.
          Maptiks is a analytics tool for web maps. It tracks things like load
          time, bounce rates, average visitor duration and much more.
        </p>
        <br />
        <p className="description-text">
          The first task I was given at Sparkgeo was to create a internal
          administrator dashboard that whould show specific user information. I
          had to create a dynamic table that could load any and all data about
          one or multiple specific users fitting the search criteria. I wrote
          this dashboard in Angular 4 and was able to load real data from the
          Maptiks user API. Unfortunately right as I was finishing up the
          project one of the senior devs found a cheap program that could do
          exactaly what my dashboard was doing. This was pretty heartbreaking
          because I had put my heart and soul into that project for about a
          month. When I told the senior dev that found the replacement program
          how I was feeling he simply replied, "well if you want to be a dev.
          Get used to it".
        </p>
        <StackList />
      </div>
    </div>
  );
}

export default Experience;
