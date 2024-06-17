import { FC } from 'react';
import { TModalProps } from './types';
import { createPortal } from 'react-dom';
import { cn } from '@/shared';

export const Modal: FC<TModalProps> = ({ visible, title, children, onClose }) => {
  return createPortal(
    <>
      <div
        className={cn(
          'w-screen h-dvh bg-black opacity-50 transition-all fixed inset-0',
          visible ? ' z-30 visible' : 'z-0 invisible',
        )}
        onClick={() => onClose(false)}
      />
      <div className={cn(visible ? 'visible' : 'invisible')}>
        <div
          className={cn(
            'h-auto w-auto min-w-96 transition-all overflow-hidden rounded-lg absolute z-40 inline-block left-1/2 top-1/2 p-8 bg-white -translate-x-1/2 -translate-y-1/2 ',
            visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
        >
          {title ? <h1 className="mb-4 text-xl font-medium">{title}</h1> : null}
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
};
