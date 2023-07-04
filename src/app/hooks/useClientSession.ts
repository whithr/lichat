import type { Session } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseBrowser';

export const useClientSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return { session };
};
