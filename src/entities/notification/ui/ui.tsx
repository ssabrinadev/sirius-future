import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NotifyError, NotifySuccess } from '@/entities/notification';
import 'react-toastify/dist/ReactToastify.css';

export const Notification: React.FC = () => {
    return <ToastContainer />;
};

export const notifySuccess: NotifySuccess = (message, options) => toast.success(message, options);
export const notifyError: NotifyError = (message, options) => toast.error(message, options);

