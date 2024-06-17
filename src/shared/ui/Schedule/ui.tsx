import { FC } from 'react';
import { cn, cva, MoneyWallet } from '@/shared';
import { TScheduleCardProps } from './types';

const scheduleVariant = cva(
  'px-6 py-3 rounded text-dark text-primary-purple-600 relative',
  {
    variants: {
      variant: {
        default: 'border-borders-green bg-secondary-green-100',
        outline: 'border-2 border-dark',
        gray: 'bg-[#7362BC]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const ScheduleCard: FC<TScheduleCardProps> = ({
  className,
  variant = 'default',
  time,
  description,
  icon,
  ...props
}) => (
  <div
    className={cn(
      'disabled:opacity-50 disabled:cursor-default',
      scheduleVariant({ variant, className }),
      'w-[200px] p-4',
    )}
    {...props}
  >
    {icon && (
      <div className="absolute top-2 right-2">
        <img src={MoneyWallet} alt="money-wallet"/>
      </div>
    )}
    <p className="text-[16px]">{time}</p>
    <p className="text-[12px]">{description}</p>
  </div>
);
