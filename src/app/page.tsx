'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}