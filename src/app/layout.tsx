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
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} ${inter.className} overflow-hidden`} suppressHydrationWarning={true}>
        <div className="bg-[#121212] text-white min-h-screen flex justify-center overflow-hidden">
          
          <div className="flex w-full max-w-[1200px] gap-10 p-5 md:p-10 max-500:flex-col ">
            
            {/* Sidebar Navigation */}
            <div className="w-1/4 md:w-1/5 md:sticky md:top-10 md:self-start max-500:fixed max-500:top-0 max-500:w-full max-500:z-50 max-500:bg-[#121212] max-500:p-4 max-500:border-b max-500:shadow-md">
              <Navigation />
            </div>
            
            {/* Main Content */}
            <div className="w-3/4 max-500:pb-20 h-screen overflow-y-auto p-5 md:p-10 scrollbar-hide max-500:mt-16 max-500:w-full">
              {children}
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
