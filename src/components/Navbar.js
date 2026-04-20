import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || localStorage.getItem('userEmail');
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
    alert('You have been logged out successfully!');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🐾</span>
          <span className="logo-text">Animal World</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/animals" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Adopt
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/success-stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Stories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <div className="user-menu">
              <span className="user-greeting">Hi, {userName?.split('@')[0] || userName?.split(' ')[0]}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="register-btn" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
