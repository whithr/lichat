'use client';

import { useRouter } from 'next/navigation';
import { useClientSession } from '../hooks/useClientSession';
import supabase from '../lib/supabaseBrowser';

export const Login = () => {
  const router = useRouter();

  const { session } = useClientSession();

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

  return (
    <div className='flex gap-2 bg-slate-500'>
      {!session ? (
        <>
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleSignIn}>Sign in</button>
        </>
      ) : (
        <button onClick={handleSignOut}>Sign out</button>
      )}
    </div>
  );
};
