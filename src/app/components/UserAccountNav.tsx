'use client';

import { useClientSession } from '../hooks/useClientSession';
import supabase from '@/lib/supabaseBrowser';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Link,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  User2,
  UserPlus,
  Users,
} from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import { useSearchParams, useRouter } from 'next/navigation';

export const UserAccountNav = () => {
  const router = useRouter();

  const { session } = useClientSession();
  const { toast } = useToast();

  return (
    <div className='flex gap-2'>
      {!session ? (
        <>
          <Button variant='outline' onClick={() => router.push('/sign-up')}>
            Sign up
          </Button>
          <Button variant='outline' onClick={() => router.push('/sign-in')}>
            Sign in
          </Button>
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <User2 className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <span className='sr-only'>account menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className='mr-2 h-4 w-4' />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className='mr-2 h-4 w-4' />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className='mr-2 h-4 w-4' />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className='mr-2 h-4 w-4' />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className='mr-2 h-4 w-4' />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className='mr-2 h-4 w-4' />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className='mr-2 h-4 w-4' />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() =>
                (window.location.href = 'https://github.com/whithr/lichat')
              }
            >
              <Github className='mr-2 h-4 w-4' />
              <span>Source Code</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className='mr-2 h-4 w-4' />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud className='mr-2 h-4 w-4' />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => supabase.auth.signOut()}>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant='outline' size='icon'>
        //       <User2 className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        //       <span className='sr-only'>account menu</span>
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align='end'>
        //     {session?.user?.email}
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem asChild>
        //       <Link href='/'>Feed</Link>
        //     </DropdownMenuItem>
        //     <DropdownMenuItem asChild>
        //       <Link href='/li/create'>
        //         <div>Create community</div>
        //       </Link>
        //     </DropdownMenuItem>
        //     <DropdownMenuItem asChild>
        //       <Link href='/settings'>Settings</Link>
        //     </DropdownMenuItem>
        //     <DropdownMenuItem
        //       className='cursor-pointer'
        //       onSelect={(event) => {
        //         event.preventDefault();
        //         try {
        //           supabase.auth.signOut();
        //         } catch (error) {
        //         } finally {
        //           toast({
        //             title: 'You logged out successfully',
        //           });
        //           console.log('HERE');
        //           router.push('/');
        //         }
        //       }}
        //     >
        //       Sign out
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      )}
    </div>
  );
};
