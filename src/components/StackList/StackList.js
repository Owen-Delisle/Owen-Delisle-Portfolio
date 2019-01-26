import React, { Component } from "react";
import "./styles.css";
import "../../Images/react-icon.png";

function StackList() {
  return (
    <div>
      <h2 className="heading-secondary">Stack List</h2>

      <div className="stackContainer">
        <div className="stackItem">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            width="25"
            height="25"
          />
          <p>React</p>
        </div>
        <div className="stackItem">
          <img
            src="https://png.pngtree.com/svg/20170719/javascript_633988.png"
            width="25"
            height="25"
          />
          <p>JavaScript</p>
        </div>
        <div className="stackItem">
          <img
            src="http://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png"
            width="25"
            height="25"
          />
          <p>Python</p>
        </div>
        <div className="stackItem">
          <img
            src="https://png.pngtree.com/svg/20170920/angular_1355702.png"
            width="25"
            height="25"
          />
          <p>Angular</p>
        </div>
        <div className="stackItem">
          <img
            src="https://cdn.worldvectorlogo.com/logos/meteor-icon.svg"
            width="25"
            height="25"
          />
          <p>Meteor</p>
        </div>
        <div className="stackItem">
          <img
            src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/java-icon.png"
            width="25"
            height="25"
          />
          <p>Java</p>
        </div>
        <div className="stackItem">
          <img
            src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
            width="25"
            height="25"
          />
          <p>CSS</p>
        </div>
        <div className="stackItem">
          <img
            src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
            width="25"
            height="25"
          />
          <p>HTML</p>
        </div>
        <div className="stackItem">
          <img
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/216/original/apollo-seeklogo.com_%281%29.png"
            width="25"
            height="25"
          />
          <p>Apollo</p>
        </div>
        <div className="stackItem">
          <img
            src="https://camo.githubusercontent.com/1dae7db18ee88a998c9b237c0d33f9c2c71f748f/68747470733a2f2f692e696d6775722e636f6d2f6254373670585a2e706e67"
            width="25"
            height="25"
          />
          <p>GraphQL</p>
        </div>
        <div className="stackItem">
          <img
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
            width="25"
            height="25"
          />
          <p>Postgress</p>
        </div>
        <div className="stackItem">
          <img
            src="https://i2.wp.com/agostini.tech/wp-content/uploads/2018/03/realm_logo.png?resize=300%2C299&ssl=1"
            width="25"
            height="25"
          />
          <p>Realm</p>
        </div>
      </div>
    </div>
  );
}

export default StackList;
