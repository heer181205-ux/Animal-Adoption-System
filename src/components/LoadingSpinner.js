import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="paw-print">🐾</div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
