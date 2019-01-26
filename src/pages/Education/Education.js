import React from "react";
import "./styles.css";
import Okpic from "../../Images/okpic.png";
import Redpic from "../../Images/red-academy-pic.jpg";
function Education({ id }) {
  return (
    <div id={id} className="Education">
      <h1 className="heading-primary">Education</h1>
      <div className="Education__container">
        <h2 className="heading-secondary">Okanagan College</h2>
        <h2 className="heading-secondary-education">
          <img src={Okpic} width="200" height="200" />
        </h2>
        <p className="description-text">
          I spent two years taking computer science at Okanagan College. I took
          courses in Java, PHP, MySql, Visual Basic, C++, Data Structures,
          Computational Mathematics, Communications, Design Patterns, and
          Networking.
        </p>
        <h2 className="heading-secondary">Red Academy</h2>
        <h2 className="heading-secondary-education">
          <img src={Redpic} width="200" height="200" />
        </h2>
        <p className="description-text">
          RedAcademy is a technology & design school with an agency-style
          environment. I successfully completed their three month project based
          App Development course. The work involved individual and group
          projects, as well as developing a mobile application made for a
          private client. The things I learned included Web and App development
          with React. Apollo. Graphql. Postgresql. Meteor.  Graphcool.
          Javascript. Node. TDD/BDD. Web Servers. Authentication. Redux.
          Security on the web.
        </p>
      </div>
    </div>
  );
}

export default Education;
