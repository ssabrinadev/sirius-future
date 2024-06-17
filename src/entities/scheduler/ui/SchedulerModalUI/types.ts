import type { TSchedulerType } from '../..';

export type SchedulerUIModalProps = {
  visible: boolean;
  onClose: (visible: boolean) => void;
  onSubmit: (value: TSchedulerType) => void;
  loading: boolean;
}
