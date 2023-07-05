'use client';

import type { Session } from '@supabase/auth-helpers-nextjs';
import { ImageIcon, Link2, User2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useGetBoardByNameQuery } from '@/hooks/api/useBoardQuery';

type MiniCreatePostProps = {
  session: Session | null;
};

export const MiniCreatePost = ({ session }: MiniCreatePostProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li className='overflow-hidden rounded-md bg-white shadow'>
      <div className='flex h-full gap-6 px-6 py-4'>
        <div className='relative self-center'>
          <User2 className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          {/* <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 outline outline-2 outline-white' /> */}
        </div>
        <div className='w-full'>
          <Input
            readOnly
            onClick={() => router.push(pathname + '/submit')}
            placeholder='Create post'
          />
        </div>

        <Button
          variant='ghost'
          onClick={() => router.push(pathname + '/submit')}
        >
          <ImageIcon className='text-zinc-600' />
        </Button>
        <Button
          variant='ghost'
          onClick={() => router.push(pathname + '/submit')}
        >
          <Link2 className='text-zinc-600' />
        </Button>
      </div>
    </li>
  );
};
