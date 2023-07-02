'use client';

import { useRouter } from 'next/navigation';
import { useClientSession } from '../hooks/useClientSession';
import supabase from '@/lib/supabaseBrowser';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Link, User2 } from 'lucide-react';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { useToast } from '@/hooks/useToast';

export const UserAccountNav = () => {
  const router = useRouter();

  const { session } = useClientSession();
  const { toast } = useToast();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: 'test@gmail.com',
      password: 'test123',
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: 'test@gmail.com',
      password: 'test123',
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  console.log(session);

  return (
    <div className='flex gap-2'>
      {!session ? (
        <>
          <Button onClick={handleSignUp}>Sign up</Button>
          <Button
            onClick={() => {
              router.push('/sign-in');
            }}
          >
            Sign in
          </Button>
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <User2 className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <span className='sr-only'>account menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => console.log('hello')}>
              {session?.user?.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href='/'>Feed</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href='/li/create'>Create community</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href='/settings'>Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer'
              onSelect={(event) => {
                event.preventDefault();
                try {
                  supabase.auth.signOut();
                } catch (error) {
                } finally {
                  toast({
                    title: 'You logged out successfully',
                  });
                  console.log('HERE');
                  router.push('/');
                }
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
