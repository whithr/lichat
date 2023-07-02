'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import type { Database } from '@/lib/database.types';

type User = Database['public']['Tables']['user_profiles']['Row'];

export const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('user_profiles').select();
      setUsers(data);
    };

    void getData();
  }, []);

  return users ? (
    <pre>{JSON.stringify(users, null, 2)}</pre>
  ) : (
    <p>Loading users...</p>
  );
};
