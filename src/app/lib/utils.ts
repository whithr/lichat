import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getQueryClient = cache(() => new QueryClient());
