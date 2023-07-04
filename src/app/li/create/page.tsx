'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  useAddBoardMutation,
  useGetBoardQuery,
  useGetBoardsQuery,
} from '@/hooks/api/useBoardQuery';
import { useClientSession } from '@/hooks/useClientSession';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const { data: board, isLoading, isError } = useGetBoardQuery(1);
  const {
    data: allBoards,
    isLoading: isBoardLoading,
    isError: isBoardError,
  } = useGetBoardsQuery();
  const addBoardMutation = useAddBoardMutation();
  const { session } = useClientSession();
  const client = useQueryClient();

  console.log(allBoards);
  console.log(session);

  const handleCreateBoard = () => {
    if (!input && !session) {
      return;
    }
    if (input && session) {
    }

    addBoardMutation.mutate(
      {
        data: {
          name: input,
          created_by: session?.user.id,
        },
      },
      {
        onSuccess: () => {
          client.invalidateQueries(['get-all-boards']);
          router.push(`/li/${input}`);
        },
      }
    );
  };

  return (
    <div className='container mx-auto flex h-full max-w-3xl items-center'>
      <div className='relative h-fit w-full space-y-6 rounded-lg bg-white p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>Create a board</h1>
        </div>
        <hr className='h-px bg-zinc-500' />
        <div>
          <p className='text-lg font-medium'>Name</p>
          <p>Community names including capitilization cannot be changed</p>
          <div className='relative'>
            <p className='absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-zinc-400'>
              li/
            </p>
            <Input
              className='pl-6'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Button variant='ghost' onClick={() => router.back()}>
            Cancel
          </Button>
          <Button onClick={handleCreateBoard}>Create Board</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
