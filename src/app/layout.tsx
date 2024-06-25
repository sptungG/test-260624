import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/common/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-slate-800 text-slate-50 w-dvw overflow-x-hidden sm-scrollbar',
          inter.className
        )}
      >
        {children}
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
