'use client';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { useToast } from '@/hooks/useToast';
import supabase from '@/lib/supabaseBrowser';
import { LoginForm } from '@/components/LoginForm';
import { Button } from '@/components/ui/button';

type UserAuthFormProps = {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      // toast here
      toast({
        title: 'You logged in successfully',
        description: 'welcome to lichat',
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    });
  }

  //TODO add is loading state to button as well as button

  return (
    <div
      className={cn('flex justify-center flex-col gap-1', className)}
      {...props}
    >
      <Button className='w-full' onClick={loginWithGoogle}>
        Google
      </Button>
      <LoginForm />
    </div>
  );
};
