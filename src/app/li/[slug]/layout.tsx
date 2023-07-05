'use client';

import { SubscribeLeaveToggle } from '@/components/SubscribeLeaveToggle';
import { buttonVariants } from '@/components/ui/button';
import { useGetBoardByNameQuery } from '@/hooks/api/useBoardQuery';
import {
  useGetSubscriberCountQuery,
  useIsUserSubscribedQuery,
} from '@/hooks/api/useSubscriberQuery';
import { useClientSession } from '@/hooks/useClientSession';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function BoardLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const { session } = useClientSession();
  const {
    data: boardData,
    isLoading: isBoardLoading,
    isError: isBoardError,
  } = useGetBoardByNameQuery(slug);
  const {
    data: isSubscribed,
    isLoading: isSubscribedLoading,
    isError,
  } = useIsUserSubscribedQuery(boardData?.id, session?.user?.id || '');

  const {
    data: subscriberCount,
    isLoading: isSubscriberCountLoading,
    isError: isSubscriberCountError,
  } = useGetSubscriberCountQuery(boardData?.id);

  if (isBoardLoading) return <>Loading</>;
  if (isBoardError) return; // switch to 404

  console.log(isSubscribed);

  return (
    <div className='mx-auto h-full max-w-7xl pt-12 sm:container'>
      <div>
        {/* TODO: button to take us back */}

        <div className='grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3 md:gap-x-4'>
          <div className='col-span-2 flex flex-col space-y-6'>{children}</div>

          {/* info sidebar */}
          <div className='hidden h-fit overflow-hidden rounded-lg border border-gray-200 md:block'>
            <div className='px-6 py-4'>
              <p className='py-3 font-semibold'>About li/{boardData?.name}</p>
            </div>
            <dl className='divide-y divide-gray-100 bg-white px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Created</dt>
                <dd className='text-gray-700'>
                  <time dateTime={boardData?.inserted_at}>
                    {format(parseISO(boardData?.inserted_at), 'MMMM d, yyyy')}
                  </time>
                </dd>
              </div>

              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Members</dt>
                <dd className='text-gray-700'>
                  <div className='text-gray-500'>{subscriberCount}</div>
                </dd>
              </div>

              {boardData?.created_by === session?.user.id ? (
                <div className='flex justify-between gap-x-4 py-3'>
                  <p className='text-gray-500'>You created this community</p>
                </div>
              ) : null}

              {boardData?.created_by !== session?.user.id &&
              session?.user &&
              isSubscribed !== undefined ? (
                <SubscribeLeaveToggle
                  boardName={boardData?.name}
                  boardId={boardData?.id}
                  userId={session?.user.id}
                  isSubscribed={isSubscribed}
                />
              ) : null}
              <Link
                className={buttonVariants({
                  variant: 'outline',
                  className: 'w-full',
                })}
                href={`${slug}/submit`}
              >
                Create Post
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
