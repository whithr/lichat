'use client';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { useToast } from '@/hooks/useToast';
import supabase from '@/lib/supabaseBrowser';
import { LoginForm } from '@/components/LoginForm';
import { Button } from '@/components/ui/button';

type UserAuthFormProps = {
  onSuccess: () => void;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserAuthForm = ({
  className,
  onSuccess,
  ...props
}: UserAuthFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  //TODO add is loading state to button as well as button

  return (
    <div
      className={cn('flex justify-center flex-col gap-1', className)}
      {...props}
    >
      {/* <Button className='w-full' onClick={loginWithGoogle}>
        Google
      </Button> */}
      <LoginForm onSuccess={onSuccess} />
    </div>
  );
};
