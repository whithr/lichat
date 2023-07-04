import supabase from '@/lib/supabaseBrowser';
import { useMemo } from 'react';

function useSupabase() {
  return useMemo(() => supabase, []);
}

export default useSupabase;
