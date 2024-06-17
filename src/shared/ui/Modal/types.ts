import { ReactNode } from 'react';

export type TModalProps = {
  title?: string;
  children: ReactNode;
  visible: boolean;
  onClose: (visible: boolean) => void
}
