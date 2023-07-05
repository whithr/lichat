'use client';

import { MiniCreatePost } from '@/components/MiniCreatePost';
import { useGetBoardByNameQuery } from '@/hooks/api/useBoardQuery';
import { useClientSession } from '@/hooks/useClientSession';

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { slug } = params;
  const { session } = useClientSession();
  const { data, isLoading, isError } = useGetBoardByNameQuery(slug);

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return (
    <>
      <h1 className='h-14 text-3xl font-bold md:text-4xl'>li/{data?.name}</h1>
      <MiniCreatePost session={session} />
      {/* TODO: show posts in user feed */}
    </>
  );
};

export default Page;
