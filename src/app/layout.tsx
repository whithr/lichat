import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/components/ModalProvider';
import Providers from '@/components/Providers';

// export const metadata = {
//   title: 'lichat',
//   description: 'front page of the internet',
// };

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={cn('antialiased', inter.className)}
    >
      <body className='min-h-screen bg-slate-50 pt-12 antialiased dark:bg-slate-800'>
        <Providers>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ModalProvider>
              <NavBar />
              <div className='container mx-auto h-full max-w-7xl pt-12'>
                {children}
                {modal}
              </div>
              <Toaster />
            </ModalProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
