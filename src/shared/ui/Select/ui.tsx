/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { KeyboardEventHandler, forwardRef } from 'react';
import { cn } from '@/shared';
import type { TSelectProps } from '.';

export const Select = forwardRef<HTMLSelectElement, TSelectProps>(
  ({ id, error, className, onKeyDown, onEnter, options, ...props }, ref) => {
    const handlePressEnter = (
      event: KeyboardEventHandler<HTMLSelectElement>,
    ) => {
      onKeyDown && onKeyDown(event);
      if (event.key === 'Enter' && onEnter) {
        onEnter(props.value);
      }
    };
    return (
      <div className="w-full">
        <select
          ref={ref}
          id={id}
          className={cn(
            'xl:w-[339px] w-full border-borders-grey py-2 px-4 rounded-[8px] pr-10 focus:outline-none border-2 focus:border-primary-purple-100 text-third-grey',
            className,
          )}
          onKeyDown={handlePressEnter}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-primary">
            {error?.[props?.name || 'root']?.message}
          </span>
        )}
      </div>
    );
  },
);
