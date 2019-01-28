import React from "react";
import "./styles.css";
function Home({ id }) {
  return (
    <div id={id} className="Home">
      <div className="Home__container">
        <h1 className="heading-primary u-margin-btm-lg">Developer.</h1>
        <p className="description-text u-margin-btm-md">
          I am passionate about software and enjoy learning about new languages
          and techniques. I taught myself HTML, CSS, and JS when I was thirteen
          and have been striving to learn more ever since. I enjoy writing clean
          and concise algorithms to solve systematic problems. I have
          demonstrated my ability to add features to live projects in a
          professional environment with minimal supervision, while working
          effectively as part of a team.
        </p>
      </div>
    </div>
  );
}

export default Home;
