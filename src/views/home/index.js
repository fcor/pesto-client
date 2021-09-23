import React from "react";
import Button from "../../components/button";
import "./styles.css";
import logo from "../../assets/img/basil.png";
import poster from "../../assets/img/poster.png";

const Home = () => {
  const handleUpload = () => {
    console.log("upload+")
  }
  return (
    <div className="app-container column">
      <div className="input-card column">
        <figure>
          <img
            src={logo}
            alt="logo"
            className="input-img"
          ></img>
        </figure>
        <p className="text-title">Short fancy title</p>
        <p className="text-basic description">Using PESTO is easy. Upload your PDB and get the 5 things. Fancy description.</p>
        <Button handleClick={handleUpload}>Upload PDB</Button>
      </div>
      <div className="examples-section column">
        <p className="text-basic-primary">Or try one of these:</p>
        <div className="row examples">
          <div className="column example">
            <figure>
              <img
                src={poster}
                alt="logo"
                className="example-img"
              ></img>
            </figure>
            <p className="text-basic">Example 1</p>
          </div>
          <div className="column example">
            <figure>
              <img
                src={poster}
                alt="logo"
                className="example-img"
              ></img>
            </figure>
            <p className="text-basic">Example 2</p>
          </div>
          <div className="column example">
            <figure>
              <img
                src={poster}
                alt="logo"
                className="example-img"
              ></img>
            </figure>
            <p className="text-basic">Example 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Home;
