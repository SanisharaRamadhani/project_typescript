import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dirjas Pottery',
  description: 'Discover handcrafted ceramic art from Dirjas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
