import { FC, useState, forwardRef, Ref } from 'react';
import { cn } from '@/shared';
import { TCheckboxProps } from '.';

export const Checkbox: FC<TCheckboxProps> = forwardRef(
  ({ id, label, className }, ref: Ref<HTMLInputElement>) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div className={cn('flex items-center', className)}>
        <input
          type="checkbox"
          id={id}
          className="mr-2 h-5 w-5 my-5 cursor-pointer"
          checked={isChecked}
          onChange={toggleCheckbox}
          ref={ref}
        />
        <label htmlFor={id} className="text-third-grey">
          {label}
        </label>
      </div>
    );
  },
);
