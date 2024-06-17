import { FC } from 'react';
import { cn, cva } from '@/shared';
import { TSecondaryButton } from '.';


const buttonVariant = cva(
  'px-6 py-3 rounded-full text-dark active:scale-95 transition',
  {
    variants: {
      variant: {
        default: 'border border-primary-purple-100 bg-primary-purple-300 text-white w-[339px]',
        outline: 'bg-white text-primary-purple-600 border border-primary-purple-300 border-2',
        lightPurple: 'border border-primary-purple-100 bg-primary-purple-200 w-[339px] h-14',
        secondary: 'bg-primary-purple-300 border border-none w-[56px] text-white',
        lightOutline: 'border w-[56px] border-primary-purple-100',
        blue: 'bg-secondary-beryuzovy border border-none',
        dashed: 'border-4 bg-secondary-orange-200 border-primary-purple-600 w-[220px] border-dashed',
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  },
);

export const Button: FC<TSecondaryButton> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => (
  <button
    className={cn(
      'disabled:opacity-50 disabled:cursor-default',
      buttonVariant({ variant, className }),
      'flex justify-center items-center px-10',
    )}
    {...props}
  >
    {children}
  </button>
);
