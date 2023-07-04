'use client';
import SignUp from '@/components/SignUp';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChange = (event: boolean) => {
    setIsOpen(event);

    // If user closes via X in the modal, we need to go back a route to reset this component.
    // Weirdly it stays mounted.
    if (!event) {
      router.back();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <SignUp onSuccess={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
}
