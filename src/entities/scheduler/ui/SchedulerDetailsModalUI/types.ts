import type { TSchedulerType } from '../..';

export type SchedulerDetailsModalUIProps = {
  visible: boolean;
  onClose: (visible: boolean) => void;
  data: TSchedulerType;
}
