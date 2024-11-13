import type { Metadata } from 'next';

import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/app/globals.css';
import Navigation from '@/UI/Commons/Navigation';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], preload: true });
const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Atharva Kurumbhatte',
  description: 'My Portfolio',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden"> {/* Prevent scrolling on main page */}
      <body className={`${plus_jakarta_sans.className} ${inter.className} overflow-hidden`} suppressHydrationWarning={true}>
        <div className="bg-[#121212] text-white min-h-screen flex justify-center overflow-hidden">
          {/* Responsive container */}
          <div className="flex w-full max-w-[1200px] p-5 md:p-10 gap-10">
            
            {/* Sidebar Navigation */}
            <div className="w-1/4 md:w-1/5 md:items-start sticky top-0 h-screen pt-12">
              <Navigation />
            </div>
            
            {/* Main Content */}
            <div className="w-3/4 md:w-4/5 h-screen overflow-y-auto p-5 md:p-10 scrollbar-hide">
              {children}
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
