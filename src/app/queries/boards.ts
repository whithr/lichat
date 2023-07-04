import { Board } from '@/components/Users';
import { SupabaseClient } from '@supabase/supabase-js';

export const getBoard = (client: SupabaseClient, boardId: number) => {
  return client
    .from('boards')
    .select(
      `
        id,
        name
      `
    )
    .eq('id', boardId)
    .throwOnError()
    .single();
};

export const getBoards = (client: SupabaseClient) => {
  return client
    .from('boards')
    .select(
      `
          id,
          name
        `
    )
    .throwOnError();
};

export const updateBoard = async (
  client: SupabaseClient,
  params: {
    id: number;
    data: Partial<Board>;
  }
) => {
  return client
    .from('boards')
    .update({
      name: params.data.name,
    })
    .match({ id: params.id })
    .throwOnError()
    .select<string, Board>('*')
    .throwOnError()
    .single();
};

export const addBoard = async (
  client: SupabaseClient,
  params: {
    data: Partial<Board>;
  }
) => {
  console.log(params);
  return client
    .from('boards')
    .insert({ name: params.data.name, created_by: params.data.created_by })
    .select();
};
