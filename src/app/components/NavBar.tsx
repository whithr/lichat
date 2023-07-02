import Link from 'next/link';
import { UserAccountNav } from '@/components/UserAccountNav';
import { ThemeModeToggle } from './ThemeToggle';

export const NavBar = async () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 dark:bg-slate-900 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <p className='text-sm font-medium'>lichat</p>
        </Link>
        {/* search bar */}
        <div className='flex gap-1'>
          <ThemeModeToggle />
          <UserAccountNav />
        </div>
      </div>
    </div>
  );
};
