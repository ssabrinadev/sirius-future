import type { TSchedulerType } from '../..';

export type TCalendarSchedulerUIProps = {
  scheduler: TSchedulerType[];
  onSubmit: (data: TSchedulerType) => void;
  onUpdate: (data: TSchedulerType) => void;
  loading: boolean;
}
