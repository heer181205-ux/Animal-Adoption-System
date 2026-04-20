import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="footer-icon">🐾</span>
            Animal World
          </h3>
          <p className="footer-description">
            Connecting loving homes with animals in need. Every adoption saves a life.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animals">Adopt a Pet</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li>📧 heer181205@gmail.com</li>
            <li>📞 +91 9601177731</li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">💼</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Animal World. All rights reserved.</p>
        <p className="developer-credits">
          Developed with ❤️ by <strong>Heer</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
