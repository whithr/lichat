'use client';
import TipTap from '@/components/ui/TipTap';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useGetBoardByNameQuery } from '@/hooks/api/useBoardQuery';
import { PostCreationPayload, PostValidator } from '@/lib/validators/post';
import { zodResolver } from '@hookform/resolvers/zod';
import { notFound } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function SubmitPostPage({ params }: PageProps) {
  const {
    data: boardData,
    isSuccess: isBoardSuccess,
    isError: isBoardError,
  } = useGetBoardByNameQuery(params.slug);
  const form = useForm<PostCreationPayload>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = () => {
    console.log('submitted');
  };

  if (!boardData) {
    return notFound();
  }
  return (
    <div className='flex flex-col items-start gap-6'>
      <div className='border-b border-gray-200 pb-5'>
        <div className='-ml-2 -mt-2 flex flex-wrap items-baseline'>
          <h3 className='ml-2 mt-2 text-base font-semibold leading-6 text-gray-900'>
            Create Post
          </h3>
          <p className='ml-2 mt-1 truncate text-sm text-gray-500'>
            in li/{params.slug}
          </p>
        </div>
      </div>

      {/* form */}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='h-full w-full space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Title of Post</FormLabel>
                  <FormControl>
                    <Input placeholder='title of post' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormControl className='h-full w-full'>
                <Controller
                  render={({ field }) => (
                    <TipTap content={field.value} onChange={field.onChange} />
                  )}
                  name='description'
                  defaultValue=''
                />
              </FormControl>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>

      <div className='flex w-full justify-end'></div>
    </div>
  );
}
