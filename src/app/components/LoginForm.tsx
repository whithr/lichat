'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
import { useForm } from 'react-hook-form';
import supabase from '@/lib/supabaseBrowser';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/useToast';

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .max(30, {
      message: 'Password must not be longer than 30 characters.',
    }),
});

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      supabase.auth.signInWithPassword({
        email: 'test@gmail.com',
        password: 'test123',
      });
    } catch (error) {
    } finally {
      toast({
        title: 'You logged in successfully',
        description: 'welcome to lichat',
      });
      router.push('/');
      //   router.refresh();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
