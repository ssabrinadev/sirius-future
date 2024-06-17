import type { Dayjs } from 'dayjs';

export type TInitialState = {
  schedulers: Record<string, any>;
  month: number;
  filter: string;
  isChanged: boolean;
  toggleModal: boolean;
  toggleDetailsModal: boolean;
  toggleUpdateModal: boolean;
  schedulerDay?: Dayjs;
}
