import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TCircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};
