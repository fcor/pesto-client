import React from "react";
import "./styles.css";

const Button = ({ children, handleClick, type }) => {
  if (type === "input") {
    return (
      <label className="btn">
        {children}
        <input
          onChange={handleClick}
          name="pdb"
          accept=".pdb"
          type="file"
          hidden
        />
      </label>
    );
  }
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
