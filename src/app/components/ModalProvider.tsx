'use client';
import { createContext, useState } from 'react';

//Defining context
export const ManagedUI = createContext<{
  openModal: boolean;
  setOpenModal: (isOpen: false) => void;
}>({ openModal: false, setOpenModal: () => null });

//Context Wrapper
export const ModalProvider = ({ children }: any) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ManagedUI.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ManagedUI.Provider>
  );
};
