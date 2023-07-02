'use client';
import SignIn from '@/components/SignIn';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => (!isOpen ? router.back() : null)}
    >
      <DialogContent>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
}
