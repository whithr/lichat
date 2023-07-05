'use client';
import { Button } from '@/components/ui/button';
import {
  useAddSubscription,
  useRemoveSubscription,
} from '@/hooks/api/useSubscriberQuery';
import { useToast } from '@/hooks/useToast';

type SubscribeLeaveToggleType = {
  boardName: string;
  boardId: number;
  userId: string;
  isSubscribed: boolean;
};

export const SubscribeLeaveToggle = ({
  boardName,
  boardId,
  userId,
  isSubscribed,
}: SubscribeLeaveToggleType) => {
  const { toast } = useToast();

  const onAddSubscriptionSuccess = () => {
    toast({
      title: `You have been added to li/${boardName}`,
    });
  };

  const onAddSubscriptionError = () => {
    toast({
      title: `We had trouble adding you to li/${boardName}`,
      description: 'Please try again',
      variant: 'destructive',
    });
  };

  const onRemoveSubscriptionSuccess = () => {
    toast({
      title: `You have been removed from li/${boardName}`,
    });
  };

  const onRemoveSubscriptionError = () => {
    toast({
      title: `We had trouble removing you from li/${boardName}`,
      description: 'Please try again',
      variant: 'destructive',
    });
  };

  const addSubscriptionMutation = useAddSubscription(
    boardId,
    userId,
    onAddSubscriptionSuccess,
    onAddSubscriptionError
  );
  const removeSubscriptionMutation = useRemoveSubscription(
    boardId,
    userId,
    onRemoveSubscriptionSuccess,
    onRemoveSubscriptionError
  );

  const handleRemoveSubscription = async () => {
    try {
      const removeSubscription = await removeSubscriptionMutation.mutateAsync();
      console.log(removeSubscription);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('done');
    }
  };

  return isSubscribed ? (
    <Button className='mb-4 mt-1 w-full' onClick={handleRemoveSubscription}>
      Leave Board
    </Button>
  ) : (
    <Button
      className='mb-4 mt-1 w-full'
      onClick={() => addSubscriptionMutation.mutate()}
    >
      Join Board
    </Button>
  );
};
