import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";

const ChainGrid = ({ data, handleSwitchChange }) => {
  const [selectedChains, setSelectedChains] = useState([]);

  const handleChange = (currentChain) => {
    const newSelectedChains = [...selectedChains];

    const currentChainIndex = selectedChains.findIndex(function (chain) {
      return chain === currentChain;
    });

    var isThisChainChecked = currentChainIndex !== -1;

    if (!isThisChainChecked) {
      newSelectedChains.push(currentChain);
    } else {
      newSelectedChains.splice(currentChainIndex, 1);
    }
    handleSwitchChange(newSelectedChains);
    setSelectedChains(newSelectedChains);
  };

  useEffect(() => {
    setSelectedChains(data.chains);
  }, [data]);

  const isThisChainSelected = useCallback(
    (chain) => {
      return selectedChains.includes(chain);
    },
    [selectedChains]
  );

  return (
    <section className="protein-section">
      <h3 className="pdb-section-title">Protein and nucleic acids</h3>
      <div className="protein-grid ">
        <div className="grid-header">
          <p className="grid-title">Chain</p>
        </div>
        <div className="grid-header">
          <p className="grid-title">Type</p>
        </div>
        <div className="grid-header">
          <p className="grid-title">Include</p>
        </div>
        {data.chains.map((chain, index) => (
          <React.Fragment key={chain}>
            <div className="grid-element">
              <p className="grid-text">{chain}</p>
            </div>
            <div className="grid-element">
              <p className="grid-text">{data.chainTypes[index]}</p>
            </div>
            <div className="grid-element">
              <div onClick={(e) => handleChange(chain)} className="switch">
                <input
                  type="checkbox"
                  className="switch-input"
                  onChange={(e) => handleChange(chain)}
                  checked={isThisChainSelected(chain)}
                />
                <label htmlFor="switch" className="switch-label">
                  Switch
                </label>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ChainGrid;
