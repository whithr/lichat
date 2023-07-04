'use client';
import SignUp from '@/components/SignUp';
import Link from 'next/link';

export default function page() {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <Link href='/' className='self-start -mt-20'>
          Home
        </Link>

        <SignUp onSuccess={() => undefined} />
      </div>
    </div>
  );
}
