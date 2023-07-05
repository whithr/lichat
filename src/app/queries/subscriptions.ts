import { SupabaseClient } from '@supabase/supabase-js';

export const getIsUserSubscribed = async (
  client: SupabaseClient,
  board_id: number,
  user_id: string
) => {
  if (!board_id || !user_id) {
    return false;
  }

  const { data, error } = await client
    .from('subscribers')
    .select(
      `
      user_id,
      board_id
    `
    )
    .eq('board_id', board_id)
    .eq('user_id', user_id);

  if (error) {
    return false;
  }

  return data.length > 0;
};

export const getSubscriberCount = async (
  client: SupabaseClient,
  board_id: number
) => {
  if (!board_id) {
    return 0;
  }
  const { data, error } = await client
    .from('subscribers')
    .select('user_id', { count: 'exact' })
    .eq('board_id', board_id);

  if (error) {
    return null;
  }

  return data.length;
};

export const addSubscription = (
  client: SupabaseClient,
  board_id: number,
  user_id: string
) => {
  return client.from('subscribers').insert({ board_id, user_id }).select();
};

export const removeSubscription = (
  client: SupabaseClient,
  board_id: number,
  user_id: string
) => {
  return client
    .from('subscribers')
    .delete()
    .eq('board_id', board_id)
    .eq('user_id', user_id);
};
