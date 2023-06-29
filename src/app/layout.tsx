import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import { NavBar } from '@/app/components/NavBar';

export const metadata = {
  title: 'lichat',
  description: 'front page of the internet',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <NavBar />
        <div className='container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>
      </body>
    </html>
  );
}
