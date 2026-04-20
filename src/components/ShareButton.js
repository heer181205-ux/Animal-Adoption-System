import React, { useState } from 'react';
import './ShareButton.css';

function ShareButton({ animalName, animalId }) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/animal/${animalId}`;
  const shareText = `Check out ${animalName} on Animal World! This adorable pet is looking for a forever home.`;

  const handleShare = (platform) => {
    let url = '';
    
    switch(platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setShowMenu(false);
        }, 2000);
        return;
      default:
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    setShowMenu(false);
  };

  return (
    <div className="share-button-container">
      <button 
        className="share-button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Share this pet"
      >
        🔗 Share
      </button>
      
      {showMenu && (
        <div className="share-menu">
          <button onClick={() => handleShare('facebook')} className="share-option">
            📘 Facebook
          </button>
          <button onClick={() => handleShare('twitter')} className="share-option">
            🐦 Twitter
          </button>
          <button onClick={() => handleShare('whatsapp')} className="share-option">
            💬 WhatsApp
          </button>
          <button onClick={() => handleShare('copy')} className="share-option">
            {copied ? '✅ Copied!' : '📋 Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
