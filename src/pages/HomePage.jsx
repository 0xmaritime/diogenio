import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PerspectiveBarrel from '../components/sections/PerspectiveBarrel';
import BarrelNotes from '../components/sections/BarrelNotes';
// import ElementShowcase from '../components/sections/ElementShowcase'; // Removed old import
import DioGenioElements from '../components/sections/DioGenioElements'; // Added new import
import NftGallery from '../components/sections/NftGallery';
import PhilosophyGrid from '../components/sections/PhilosophyGrid'; // Added import
import Manifesto from '../components/sections/Manifesto';

export default function HomePage() {
  const navigate = useNavigate();

  const barrelQuotes = [
    "Perspective is the ultimate luxury",
    "Ancient DAWG energy for those who refuse containment",
    "Diogenes found freedom in constraints. So can you.",
    "Philosophy is a barrel with no bottom"
  ];

  const nftImages = [
    { src: "/nfts/diogenio-1.png", alt: "DioGenio NFT #1" },
    { src: "/nfts/diogenio-2.png", alt: "DioGenio NFT #2" },
    { src: "/nfts/diogenio-3.png", alt: "DioGenio NFT #3" },
    { src: "/nfts/diogenio-4.png", alt: "DioGenio NFT #4" }
  ];

  return (
    <Layout>
      <PerspectiveBarrel 
        quotes={barrelQuotes}
        nftImages={nftImages}
        cta={{
          text: "Step inside",
          onClick: () => navigate('/gallery')
        }}
      />
      <DioGenioElements /> {/* Replaced ElementShowcase */}
      <NftGallery />
      <PhilosophyGrid /> {/* Added component */}
      <Manifesto />
      <BarrelNotes />
    </Layout>
  );
}
