'use-client';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/components/ModalProvider';

export const metadata = {
  title: 'lichat',
  description: 'front page of the internet',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn('antialiased', inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased dark:bg-slate-800'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ModalProvider>
            <NavBar />
            <div className='container max-w-7xl mx-auto h-full pt-12'>
              {children}
              {modal}
            </div>
            <Toaster />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
