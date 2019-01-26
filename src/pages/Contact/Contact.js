import React from "react";
import ProfilePic from "../../Images/profilepic.jpeg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import "./styles.css";

function Contact({ id }) {
  return (
    <div id={id} className="Contact">
      <h1 className="heading-primary">Contact</h1>
      <div className="Contact__container">
        <div className="profileContainer">
          <img src={ProfilePic} className="profile" />
        </div>
        <div className="contactFormContainer">
          <div className="contactForm">
            <div className="contactFormField">
              <PhoneIcon className="icon" />
              250-640-4012
            </div>
            <div className="contactFormField">
              <EmailIcon className="icon" />
              Owen37164@gmail.com
            </div>
            <div className="contactFormField">
              <HomeIcon className="icon" />
              Prince George BC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
