import { SelectHTMLAttributes } from 'react';

export type TCheckboxProps = SelectHTMLAttributes<HTMLInputElement> & {
    label: string;
    isChecked?: boolean;
    toggleCheckbox?: (isChecked: boolean) => void;
    className?: string;
};
