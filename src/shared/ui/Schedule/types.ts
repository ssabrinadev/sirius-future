import { HTMLAttributes } from 'react';

export type TScheduleCardProps = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    time: string;
    description: string;
    variant?: 'default' | 'outline' | 'gray';
    icon?: boolean;
};
