import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Fitness Tracker</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/Faq">FAQ'S</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
