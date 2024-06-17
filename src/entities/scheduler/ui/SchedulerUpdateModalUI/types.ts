import type { TSchedulerType } from '../..';

export type SchedulerUpdateModalUIProps = {
  visible: boolean;
  onClose: (visible: boolean) => void;
  onSubmit: (value: TSchedulerType) => void;
  loading: boolean;
  data: TSchedulerType;
}
