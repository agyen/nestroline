import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import AosProvider from '@/providers/AosProvider';
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nestroline - Advanced Software Engineering & AI Solutions',
  description: 'Transform your business with cutting-edge software solutions, expert consultancy, and AI innovations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosProvider>
          {children}
          <Toaster position="top-right" />
        </AosProvider>
        <Script
          defer 
          data-website-id="d4bc2c16-e693-4abe-bb15-322006b9297b" 
          data-domain="https://nestroline.com" 
          src="https://analytics-5qai.onrender.com/static/tracker.js" />
      </body>
    </html>
  );
}