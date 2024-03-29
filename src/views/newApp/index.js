import React, { useState } from "react";
import swal from "sweetalert";
import Button from "../../components/button";
import Loading from "../../components/loading";
import logo from "../../assets/img/basil2.png";
import Molstar from "../../components/molstar";
import ChainGrid from "../../components/chainGrid";
import parsePdb from "../../utils/parsePdb";

import "./styles.css";

const NewApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isPdbParsed, setIsPdbParsed] = useState(false);
  const [pdbs, setPdbs] = useState(null);
  const [value, setValue] = useState("");
  const [pdb, setPdb] = useState("");
  const [pdbData, setPdbData] = useState(null);
  const [selectedChains, setSelectedChains] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlePDBChange = (e) => {
    setPdb(e.target.value);
  };

  const handleSearch = (e) => {
    setIsSearching(true);

    const url =
      value.length === 4
        ? `https://files.rcsb.org/view/${value}.pdb`
        : `https://alphafold.ebi.ac.uk/files/AF-${value}-F1-model_v1.pdb`;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("error");
        } else {
          return response.text();
        }
      })
      .then(function (data) {
        setIsSearching(false);
        setPdb(data);
      })
      .catch(function (error) {
        console.log("Error: ", error);
        setIsSearching(false);
        swal("Something went wrong", "Please, try again", "error");
      });
  };

  const handleUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPdb(reader.result);
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleParsePdb = () => {
    if (pdb.length === 0) return;
    const result = parsePdb(pdb);
    setIsPdbParsed(true);
    setPdbData(result);
    setSelectedChains(result.chains);
  };

  const handleSwitchChange = (selectedChains) => {
    setSelectedChains(selectedChains);
  };

  const handleReset = () => {
    setIsModelLoaded(false);
    setValue("");
    setPdb("");
    setSelectedChains([]);
    setIsPdbParsed(false);
    setPdbData(null);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    const data = {
      pdb: pdb,
      chains: selectedChains,
    };
    fetch("https://pesto.epfl.ch/api/i/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
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
        swal("Something went wrong", "Please, try again", "error");
        console.log("Error: ", error);
        setIsLoading(false);
      });
  };


  return (
    <div className="app-container column">
      {isModelLoaded && <Molstar data={pdbs} handleReset={handleReset} />}
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
              <p className="text-title">PeSTo</p>
              <p className="text-basic description">
                PeSTo (Protein Structure Transformer) is a parameter-free
                geometric deep learning method to predict protein interaction
                interfaces from a protein structure. It is available for free
                without registration as an online tool. A manuscript of the
                method is in preparation and will be available soon.
              </p>

              <p className="text-basic description align-left">
                Learn more about this project in this&nbsp;
                <span>
                  <a
                    className="preprint-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.nature.com/articles/s41467-023-37701-8"
                  >
                    paper at Nature Communications.
                  </a>
                </span>
              </p>
              <p className="text-title">How to use</p>
              <div className="text-basic description">
                Copy-paste your atomic coordinates in PDB format, or upload a
                PDB file from your drive, or fetch a protein structure/model
                from:
                <ul>
                  <li>
                    The protein data bank by typing a PDB ID. Example: 2CUA
                  </li>
                  <li>
                    The AlphaFold-EBI database by typing a Uniprot ID. Example:
                    P27695
                  </li>
                  <li>Upload your own PDB formated structure</li>
                </ul>
                Then click "Detect chains", select one or more, and submit your
                job to run the prediction. Your results should be available in
                less than a minute. If an error occurs, the PDB file might be
                not correctly formated or the input structure is too big
              </div>
              <div className="search-container row">
                <div className="search-input-box row">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="2CUA"
                    onChange={handleChange}
                    value={value}
                  />
                  <Button
                    handleClick={handleSearch}
                    loading={isSearching}
                    size="medium"
                  >
                    Fetch PDB/AF-EBI
                  </Button>
                </div>
                <Button
                  styles="upload-btn"
                  handleClick={handleUpload}
                  type="input"
                  size="medium"
                >
                  Upload PDB
                </Button>
              </div>
              <textarea
                className="pdb-text"
                cols="30"
                rows="10"
                placeholder="Copy-Paste molecule here"
                onChange={handlePDBChange}
                value={pdb}
              />
              <Button handleClick={handleParsePdb} size="medium">
                Detect chains
              </Button>

              {isPdbParsed && (
                <>
                  <ChainGrid
                    data={pdbData}
                    handleSwitchChange={handleSwitchChange}
                  />
                  <Button handleClick={handleSubmit} size="medium">
                    Submit
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewApp;
