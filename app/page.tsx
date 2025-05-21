import React from 'react';
import Hero from './components/Hero';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Program />
      <Speakers />
      <Contact />
    </main>
  );
} 