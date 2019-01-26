import React, { Component } from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Scrollchor from "react-scrollchor";

function Header() {
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
}

export default Header;
