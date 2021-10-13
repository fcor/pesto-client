import React, { useEffect, useState } from "react";
import "./styles.css";

const Button = ({ children, handleClick, type, size, loading = false }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(loading);
  }, [loading]);

  if (type === "input") {
    return (
      <label className={`btn ${size}`}>
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
    <button className={`btn ${size}`} disabled={isDisabled} onClick={handleClick}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
