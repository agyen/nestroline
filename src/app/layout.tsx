import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import AosProvider from '@/providers/AosProvider';

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
      </body>
    </html>
  );
}