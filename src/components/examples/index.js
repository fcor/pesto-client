import React from "react";
import "./styles.css";
import poster from "../../assets/img/poster.png";

const Examples = () => {
  return (
    <div className="examples-section column">
      <p className="text-basic-primary">Or try one of these:</p>
      <div className="row examples">
        <div className="column example">
          <figure>
            <img src={poster} alt="logo" className="example-img"></img>
          </figure>
          <p className="text-basic">Example 1</p>
        </div>
        <div className="column example">
          <figure>
            <img src={poster} alt="logo" className="example-img"></img>
          </figure>
          <p className="text-basic">Example 2</p>
        </div>
        <div className="column example">
          <figure>
            <img src={poster} alt="logo" className="example-img"></img>
          </figure>
          <p className="text-basic">Example 3</p>
        </div>
      </div>
    </div>
  );
};

export default Examples;
