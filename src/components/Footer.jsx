import React from 'react';
import './Footer.css';
import githubIcon from '../assets/logo-github.svg';
import linkedinIcon from '../assets/logo-linkedin.svg';
import emailIcon from '../assets/mail-logo.svg';
import whatsappIcon from '../assets/logo-whatsapp.svg';

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-icons">
      <a href="https://wa.me/3046576354" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
      </a>  
      <a href="https://github.com/Tomaslopera" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/tomaslopera/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="mailto:loperatomas410@gmail.com">
        <img src={emailIcon} alt="Email" />
      </a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
