import { FC } from 'react';
import { cn } from '@/shared';
import type { TCircleButtonProps } from '.';

export const CircleButton: FC<TCircleButtonProps> = ({ children, ...props }) => (
  <button
    className={cn(
      ' bg-primary-purple-100 rounded-full text-primary-purple-600 border flex items-center justify-center w-[50px] h-[50px]',
    )}
    {...props}
  >
    {children}
  </button>
);
