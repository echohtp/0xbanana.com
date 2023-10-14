// components/ArtGrid.tsx
import React, { useState } from 'react';
import Link from 'next/link'
import { Dialog } from '@headlessui/react';
import ArtCard from './ArtCard';
import BuyButton from './BuyButton';
import artPiecesData from '../data/artPieces';

const ArtGrid = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const artPieces = artPiecesData;

  const closeModal = () => {
    setSelectedArt(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {artPieces.map((art) => (
          <Link href={`art/${art.id}`}>
          <ArtCard key={art.id} art={art} />
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default ArtGrid;
