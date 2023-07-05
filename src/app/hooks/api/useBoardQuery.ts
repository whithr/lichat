import { Board } from '@/components/Users';
import useSupabase from '@/hooks/useSupabase';
import {
  addBoard,
  getBoardById,
  getBoardByName,
  getBoards,
  updateBoard,
} from '@/queries/boards';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetBoardByIdQuery = (boardId: number) => {
  const client = useSupabase();
  const key = [`get-board-by-id`, boardId];

  return useQuery(key, async () => {
    return getBoardById(client, boardId).then((result) => result.data);
  });
};

export function useGetBoardByNameQuery(name: string) {
  const client = useSupabase();
  const key = ['get-board-by-name', name];

  return useQuery({
    queryKey: key,
    queryFn: async () =>
      getBoardByName(client, name).then((result) => result.data),
  });
}

export const useGetBoardsQuery = () => {
  const client = useSupabase();
  const key = ['get-all-boards'];

  return useQuery(key, async () => {
    return getBoards(client).then((result) => result.data);
  });
};

export const useUpdateBoardMutation = () => {
  const client = useSupabase();

  return useMutation(
    async ({ id, data }: { id: number; data: Partial<Board> }) => {
      return updateBoard(client, { id, data }).then((result) => result.data);
    }
  );
};

export const useAddBoardMutation = () => {
  const client = useSupabase();

  return useMutation(async ({ data }: { data: Partial<Board> }) => {
    return addBoard(client, { data }).then((result) => result.data);
  });
};
