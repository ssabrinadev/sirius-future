/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { KeyboardEventHandler, forwardRef } from 'react';
import { cn, cva } from '@/shared';
import type { TInputProps } from '.';

const inputVariant = cva(
  'xl:w-[339px] w-full border-borders-grey py-2 px-4 rounded-[8px] pr-10 focus:outline-none border-2 focus:border-primary-purple-200 text-third-grey',
  {
    variants: {
      variant: {
        default: '',
        danger: ' border border-red-500 focus:border-red-500',
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  },
);

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    { id, variant = 'default', error, label, className, onKeyDown, onEnter, ...props },
    ref,
  ) => {
    const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      onKeyDown && onKeyDown(event);
      if (event.key === 'Enter' && onEnter) {
        onEnter(props.value);
      }
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          ref={ref}
          id={id}
          className={cn(inputVariant({ variant }), className)}
          onKeyDown={handlePressEnter}
          {...props}
        />
        {error && (
          <span className="text-primary">
            {error?.[props?.name || 'root']?.message}
          </span>
        )}
      </div>
    );
  },
);
