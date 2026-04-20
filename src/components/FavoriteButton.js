import React, { useState, useEffect } from 'react';
import './FavoriteButton.css';

function FavoriteButton({ animalId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if animal is in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(animalId));
  }, [animalId]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter(id => id !== animalId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(animalId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <button 
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;
