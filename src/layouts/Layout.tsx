import React from 'react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Nestroline - Advanced Software Engineering & AI Solutions" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <title>{title}</title>
        <script defer data-website-id="d4bc2c16-e693-4abe-bb15-322006b9297b" data-domain="https://nestroline.com" src="https://analytics-5qai.onrender.com/static/tracker.js"></script>
      </head>
      <body className="bg-slate-50">
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  );
};