'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import dynamic from 'next/dynamic';
// import { PostHogProvider } from 'posthog-js/react';

const PostHogProvider = dynamic(
  () => import('posthog-js/react').then(mod => mod.PostHogProvider),
  { ssr: false }
);

const options = {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
}

export default function Home() {
  return (
    <main className="bg-slate-50">
      <PostHogProvider apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY || ''} options={options}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      </PostHogProvider>
    </main>
  );
}