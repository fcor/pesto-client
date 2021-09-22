import React from "react";
import "./styles.css";
import epflLogo from "../../assets/img/epfl.png";
import lbmLogo from "../../assets/img/lbm2.png";
import snfLogo from "../../assets/img/snf.png";

const Footer = () => {
  return (
    <footer className="column">
      <div class="footer-top">
        <div class="logos">
          <a href="https://www.epfl.ch" target="_blank" rel="noreferrer">
            <img src={epflLogo} alt="epfl logo" height="50" />
          </a>
          <a href="http://www.snf.ch" target="_blank" rel="noreferrer">
            <img src={snfLogo} alt="snf logo" height="50" />
          </a>
          <a
            href="https://www.epfl.ch/labs/lbm/"
            target="_blank"
            rel="noreferrer"
          >
            <img class="lbm" src={lbmLogo} alt="lbm logo" height="90" />
          </a>
        </div>
        <div class="contact-info">
          <p class="contact-us">Contact us</p>
          
          <a href="#" target="_blank" rel="noreferrer">
            <p class="contact-name">Lucien Krapp</p>
          </a>
          <p class="contact-email">lucien.krapp@epfl.ch</p>

          <a
            href="https://people.epfl.ch/matteo.dalperaro"
            target="_blank"
            rel="noreferrer"
          >
            <p class="contact-name">Matteo Dal Peraro</p>
          </a>
          <p class="contact-email">matteo.dalperaro@epfl.ch</p>
        </div>
      </div>
      <p class="privacy-policy">
        Copyright © 2021 Laboratory for biomolecular modeling, EPFL. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
