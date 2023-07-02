import { createContext, useCallback, useEffect, useState } from 'react';
import { Toast } from '../components/ui/toaster';

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<any>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts: any[]) => toasts.slice(1)),
        3000
      );
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToast = useCallback(
    (toast: any) => {
      setToasts((toasts: any[]) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div>
        {toasts.map((toast) => (
          <Toast key={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
