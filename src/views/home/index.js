import React from "react";
import Button from "../../components/button";
import "./styles.css";

const Home = () => {
  const handleUpload = () => {
    console.log("upload+")
  }
  return (
    <div className="app-container column">
      <div className="input-card column">
        <figure>
          <img
            src="https://fakeimg.pl/200/200"
            alt="logo"
            className="input-img"
          ></img>
        </figure>
        <p>Upload a PDB file to see what PESTO does :)</p>
        <Button handleClick={handleUpload}>Upload PDB</Button>
      </div>
      <div className="examples-section column">
        <p>Or try one of these:</p>
        <div className="row examples">
          <figure>
            <img
              src="https://fakeimg.pl/200/200"
              alt="logo"
              className="example-img"
            ></img>
          </figure>
          <figure>
            <img
              src="https://fakeimg.pl/200/200"
              alt="logo"
              className="example-img"
            ></img>
          </figure>
          <figure>
            <img
              src="https://fakeimg.pl/200/200"
              alt="logo"
              className="example-img"
            ></img>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
