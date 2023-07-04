'use client';
import { Users } from '@/components/Users';
import { Button, buttonVariants } from '@/components/ui/button';
import { useToast } from './hooks/useToast';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { toast } = useToast();

  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl'>Your feed</h1>
      <div className='md:ga-x-4 grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3'>
        {/* feed */}
        {/* board info */}
        <div className='order-first h-fit overflow-hidden rounded-lg border-gray-200'>
          <div className='bg-emerald-100 px-6 py-4'>
            <p className='flex items-center gap-1.5 py-3 font-semibold'>
              <HomeIcon className='h-4 w-4' /> Home
            </p>
          </div>
          <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p>
                Your personal liboard. Come here to check in with your favorite
                boards.
              </p>
            </div>
            <Link
              className={buttonVariants({ className: 'mb-6 mt-3 w-full' })}
              href='/li/create'
            >
              Create Board
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
