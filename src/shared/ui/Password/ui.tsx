/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, forwardRef, KeyboardEventHandler } from 'react';
import { cn, EyeCross, EyeOpen } from '@/shared';
import type { TPasswordProps } from '.';

export const Password = forwardRef<HTMLInputElement, TPasswordProps>(
  ({ id, error, className, onKeyDown, onEnter, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      if (onKeyDown) onKeyDown(event);
      if (event.key === 'Enter' && onEnter) {
        onEnter((props.value as string) || '');
      }
    };

    return (
      <div className="w-full relative">
        <input
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          id={id}
          className={cn(
            'xl:w-[339px] w-full border border-borders-grey py-2 px-4 rounded-[8px] pr-10 focus:outline-none focus:border-2 focus:border-primary-purple-200 text-third-grey',
            className,
          )}
          onKeyDown={handlePressEnter}
          {...props}
        />
        {error && (
          <span className="text-primary">
            {error?.[props?.name || 'root']?.message}
          </span>
        )}
        <div
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src={EyeOpen} alt="Show Password" />
          ) : (
            <img src={EyeCross} alt="Hide Password" />
          )}
        </div>
      </div>
    );
  },
);
