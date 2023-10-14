// components/ArtCard.tsx
import React from 'react';
import BuyButton from './BuyButton';

const ArtCard = ({ art, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img src={`${art.image}`} alt={art.title} className="w-full h-64 object-cover" />
      
    </div>
  );
};

export default ArtCard;
