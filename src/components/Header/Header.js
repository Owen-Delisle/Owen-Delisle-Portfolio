import React, { Component } from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Scrollchor from "react-scrollchor";
import Menu from "@material-ui/icons/Menu";

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  render() {
    if (!isMobileDevice()) {
      return (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          className="HeaderContainer"
          spacing={16}
        >
          <Grid item xs={6}>
            <p className="name">Owen Delisle</p>
          </Grid>
          <Grid item sm={1}>
            <a href="javascript:void(0)" className="content">
              <Scrollchor to="#home">Home</Scrollchor>
            </a>
          </Grid>
          <Grid item sm={1}>
            <a href="javascript:void(0)" className="content">
              <Scrollchor to="#projects">Projects</Scrollchor>
            </a>
          </Grid>
          <Grid item sm={1}>
            <a href="javascript:void(0)" className="content">
              <Scrollchor to="#experience">Experience</Scrollchor>
            </a>
          </Grid>
          <Grid item sm={1}>
            <a href="javascript:void(0)" className="content">
              <Scrollchor to="#education">Education</Scrollchor>
            </a>
          </Grid>
          <Grid item sm={1}>
            <a href="javascript:void(0)" className="content">
              <Scrollchor to="#contact">Contact</Scrollchor>
            </a>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <div className="HeaderContainer">
          <p className="name">Owen Delisle</p>

          <Menu
            className="menuIcon"
            onClick={() => {
              console.log(this.state.showMenu);
              this.setState({ showMenu: !this.state.showMenu });
            }}
          />

          {this.state.showMenu && (
            <div
              className="dropDown"
              onClick={() => {
                console.log(this.state.showMenu);
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              <a href="javascript:void(0)" className="content">
                <Scrollchor to="#home">Home</Scrollchor>
              </a>
              <a href="javascript:void(0)" className="content">
                <Scrollchor to="#projects">Projects</Scrollchor>
              </a>
              <a href="javascript:void(0)" className="content">
                <Scrollchor to="#experience">Experience</Scrollchor>
              </a>
              <a href="javascript:void(0)" className="content">
                <Scrollchor to="#education">Education</Scrollchor>
              </a>
              <a href="javascript:void(0)" className="content">
                <Scrollchor to="#contact">Contact</Scrollchor>
              </a>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Header;
