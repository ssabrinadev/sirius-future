import { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export type TInputVariant = | 'danger' | 'default' ;

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    variant?: TInputVariant;
    error?: FieldErrors
    onEnter?: (value: string) => void
}
