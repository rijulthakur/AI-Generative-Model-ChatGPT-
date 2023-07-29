import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="contact-info">
      <Link to="https://github.com/rijulthakur" target="_blank">
          <i className="fab fa-github"></i>Github
        </Link>
        <Link to="tel:+1-123-456-7890">
          <i className="fas fa-phone"></i>123-456-7890
        </Link>
        <Link to="https://www.linkedin.com/in/your-linkedin-profile/">
          <i className="fab fa-linkedin"></i>Rijul Thakur
        </Link>
        
      </div>
    </footer>
  );
}

