import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate login (no backend)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    
    alert(`Welcome back! Logged in as ${formData.email}`);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-branding">
            <div className="brand-icon">🐾</div>
            <h1>Animal World</h1>
            <p>Find your perfect companion and give them a loving home</p>
          </div>
          <div className="auth-image">
            <img 
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop" 
              alt="Happy pets"
            />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-container">
            <h2>Welcome Back!</h2>
            <p className="auth-subtitle">Sign in to continue your adoption journey</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="auth-button">
                Sign In
              </button>

              <div className="auth-divider">
                <span>OR</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span>🔍</span> Continue with Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span>📘</span> Continue with Facebook
                </button>
              </div>

              <p className="auth-footer">
                Don't have an account? <Link to="/register" className="auth-link">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
