import React from "react";
import "./styles.css";
function Home({ id }) {
  return (
    <div id={id} className="Home">
      <div className="Home__container">
        <h1 className="heading-primary u-margin-btm-lg">Developer.</h1>
        <p className="description-text u-margin-btm-md">
          Hi, I'm Owen! I develop state of the art mobile and web applications
          with the latest and greatest tech.
        </p>
      </div>
    </div>
  );
}

export default Home;
