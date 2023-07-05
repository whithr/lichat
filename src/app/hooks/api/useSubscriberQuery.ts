import useSupabase from '@/hooks/useSupabase';
import { getQueryClient } from '@/lib/utils';
import {
  addSubscription,
  getIsUserSubscribed,
  getSubscriberCount,
  removeSubscription,
} from '@/queries/subscriptions';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useIsUserSubscribedQuery = (boardId: number, userId: string) => {
  const client = useSupabase();
  const key = ['subscribers', 'subscribers-get-is-user', boardId, userId];

  return useQuery(key, async () => {
    return getIsUserSubscribed(client, boardId, userId).then(
      (result) => result
    );
  });
};

export const useGetSubscriberCountQuery = (boardId: number) => {
  const client = useSupabase();
  const key = ['subscribers', 'subscribers-get-count', boardId];

  return useQuery(key, async () => {
    return getSubscriberCount(client, boardId).then((result) => result);
  });
};

export const useAddSubscription = (
  boardId: number,
  userId: string,
  onSuccess: () => void,
  onError: () => void
) => {
  const client = useSupabase();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      return addSubscription(client, boardId, userId).then(
        (result) => result.data
      );
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ['subscribers'],
        });
      },
      onSuccess: () => onSuccess(),
      onError: () => onError(),
    }
  );
};

export const useRemoveSubscription = (
  boardId: number,
  userId: string,
  onSuccess: () => void,
  onError: () => void
) => {
  const client = useSupabase();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      return removeSubscription(client, boardId, userId).then(
        (result) => result.data
      );
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ['subscribers'],
        });
      },
      onSuccess: () => onSuccess(),
      onError: () => onError(),
    }
  );
};
