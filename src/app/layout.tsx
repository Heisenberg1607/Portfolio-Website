import type { Metadata } from 'next';



import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/app/globals.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], preload: true });
const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Atharva kurumbhatte',
  description: 'My Portfolio',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();

  return (
    // <SessionProvider session={session}>
      <html lang="en">
        {/* <ToastProvider> */}
          <body className={`${plus_jakarta_sans.className} ${inter.className}`} suppressHydrationWarning={true}>
            {/* <Toaster /> */}
            {children}
          </body>
        {/* </ToastProvider> */}
      </html>
    // </SessionProvider>
  );
}
