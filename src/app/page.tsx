'use client';
import { Users } from '@/components/Users';
import { Button } from '@/components/ui/button';
import { useToast } from './hooks/useToast';

export default function Home() {
  const { toast } = useToast();

  return (
    <>
      <Users />
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Click me
      </Button>
    </>
  );
}
