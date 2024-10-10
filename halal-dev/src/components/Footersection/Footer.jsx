import React from 'react';
import './Footer.css'; // Ensure you have a separate CSS file or use inline styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="src/assets/logo 1 (1).png" alt="Halal DevCo Logo" />
          <p>إستثمر بثقة، تطور بفخر</p>
        </div>
        <div className="footer-section">
          <h3>Call Center</h3>
          <p>800 100 975 2034</p>
          <p>+1 212 800 226 9678</p>
        </div>
        <div className="footer-section">
          <h3>Our Location</h3>
          <p>USA, New York - 1000</p>
          <p>5th First Avenue 1</p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <p>Investments</p>
          <p>Industries</p>
          <p>Advisory</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>News and Media</p>
          <p>Team</p>
        </div>
        <div className="footer-section">
          <h3>Email</h3>
          <p>info@hdco.sa</p>
        </div>
        <div className="footer-section">
          <h3>Social Network</h3>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
