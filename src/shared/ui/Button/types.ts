import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButtonVariant = | 'outline' | 'lightPurple' | 'default' | 'secondary' | 'lightOutline' | 'blue' | 'dashed';

export type TSecondaryButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: TButtonVariant;
    children: ReactNode;
};
