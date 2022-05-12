/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import "./styles.css";

const expiresIn = 2629800000; // One month

const PolicyBanner = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const handleClick = () => {
    setShouldDisplay(false);
    const expire = new Date(Date.now() + expiresIn);
    document.cookie = "policy=accepted; expires=" + expire + ";";
  };

  useEffect(() => {
    const hasUserAccepted = document.cookie.split(";").some(function (item) {
      return item.trim().indexOf("policy=") === 0;
    });
    setShouldDisplay(!hasUserAccepted);
  }, []);

  return (
    <div
      className={`policy-banner row ${shouldDisplay ? "" : "hidden"}`}
      id="privacy"
    >
      <p>
        We use cookies to improve your experience on our site. By using PESTO
        you agree to our privacy policy.&nbsp;
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://molecularweb.epfl.ch/assets/policy.pdf"
          >
            Learn more
          </a>
        </span>
      </p>
      <button onClick={handleClick}>Ok</button>
    </div>
  );
};

export default PolicyBanner;
