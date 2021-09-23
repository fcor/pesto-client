import React from "react";
import "./styles.css";

const Button = ({children, handleClick}) => {
  
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  )
};

export default Button;