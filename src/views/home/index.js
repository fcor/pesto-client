import React, { useState } from "react";
import Button from "../../components/button";
import Loading from "../../components/loading";
import "./styles.css";
import logo from "../../assets/img/basil.png";
import Molstar from "../../components/molstar";
import Examples from "../../components/examples";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [pdbs, setPdbs] = useState(null);

  const handleUpload = (e) => {
    setIsLoading(true);
    const data = new FormData();
    data.append("pdb", e.target.files[0]);
    fetch("http://lbmpc2:44777/i/", {
      method: "POST",
      body: data,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPdbs(myJson);
        setIsLoading(false);
        setIsModelLoaded(true);
      })
      .catch(function (error) {
        console.log("Something went wrong", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="app-container column">
      {isModelLoaded && <Molstar data={pdbs} />}
      {!isModelLoaded && (
        <div className="input-card column">
          <figure>
            <img src={logo} alt="logo" className="input-img"></img>
          </figure>
          {isLoading ? (
            <div className="column input-card-bottom">
              <Loading />
              <p className="text-basic description">
                Please wait a few seconds
              </p>
            </div>
          ) : (
            <div className="column input-card-bottom">
              <p className="text-title">Short fancy title</p>
              <p className="text-basic description">
                Using PESTO is easy. Upload your PDB and get the 5 things. Fancy
                description.
              </p>
              <Button handleClick={handleUpload} type="input">
                Upload PDB
              </Button>
            </div>
          )}
        </div>
      )}
      {!isModelLoaded && <Examples />}
    </div>
  );
};

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Home;
