import { SelectHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export type SelectOption = {
    value: string;
    label: string;
}

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    error?: FieldErrors;
    onEnter?: (value: string) => void;
    options: SelectOption[];
};
