import { ToastOptions } from 'react-toastify';

export type NotifySuccess = (message: string, options?: ToastOptions) => void;
export type NotifyError = (message: string, options?: ToastOptions) => void;
