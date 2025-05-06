import React from 'react';
import Layout from '../components/layout/Layout';
import HeroTerminal from '../components/sections/HeroTerminal';
import ElementShowcase from '../components/sections/ElementShowcase';
import NftGallery from '../components/sections/NftGallery';
import Manifesto from '../components/sections/Manifesto';

export default function HomePage() {
  return (
    <Layout>
      <HeroTerminal />
      <ElementShowcase />
      <NftGallery />
      <Manifesto />
    </Layout>
  );
}
