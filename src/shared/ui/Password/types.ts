import { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export type TPasswordProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldErrors
    onEnter?: (value: string) => void
}
