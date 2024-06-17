import { FC, useMemo } from 'react';
import { getMonth } from '@/shared/utils/date';
import { MonthCalendarSchedulerUI, TCalendarSchedulerUIProps } from '..';
import { SchedulerModalUI } from '../SchedulerModalUI';
import { useAppDispatch, useAppSelector } from '@/shared';
import {
  getSchedulerMonth,
  getSchedulers,
  getToggleDetailsSchedulersModal,
  getToggleSchedulersModal,
  getToggleUpdateSchedulersModal,
  toggleSchedulersDetailsModal,
  toggleSchedulersModal,
  toggleSchedulersUpdateModal,
} from '../..';
import { SchedulerDetailsModalUI } from '../SchedulerDetailsModalUI';
import { SchedulerHeaderUI } from '../SchedulerHeaderUI';
import { SchedulerUpdateModalUI } from '../SchedulerUpdateModalUI';

export const CalendarSchedulerUI: FC<TCalendarSchedulerUIProps> = ({
  scheduler,
  loading,
  onSubmit,
  onUpdate,
}) => {
  const monthIndex = useAppSelector(getSchedulerMonth);
  const month = getMonth(monthIndex);

  const visible = useAppSelector(getToggleSchedulersModal);
  const visibleUpdate = useAppSelector(getToggleUpdateSchedulersModal);
  const visibleDetails = useAppSelector(getToggleDetailsSchedulersModal);
  const selectedEvent = useAppSelector(getSchedulers);
  const dispatch = useAppDispatch();

  const dataMonth = useMemo(
    () =>
      month.map((m) => {
        return m.map((d) => {
          const finded = scheduler.filter(
            (s) => s.createdAt === d.toISOString(),
          );

          if (!finded) {
            return Object.assign(Object.create(d), { data: [] });
          }

          return Object.assign(Object.create(d), { data: finded });
        });
      }),
    [month, scheduler],
  );

  const handleClose = () => {
    dispatch(toggleSchedulersModal(false));
  };

  const handleCloseDetails = () => {
    dispatch(toggleSchedulersDetailsModal(false));
  };

  const handleCloseUpdate = () => {
    dispatch(toggleSchedulersUpdateModal(false));
  };

  return (
    <>
      <SchedulerModalUI
        loading={loading}
        visible={visible}
        onClose={handleClose}
        onSubmit={onSubmit}
      />
      <SchedulerDetailsModalUI
        visible={visibleDetails}
        onClose={handleCloseDetails}
        data={selectedEvent}
      />
      <SchedulerUpdateModalUI
        visible={visibleUpdate}
        loading={loading}
        data={selectedEvent}
        onClose={handleCloseUpdate}
        onSubmit={(value) => onUpdate(value)}
      />
      <SchedulerHeaderUI />
      <MonthCalendarSchedulerUI months={dataMonth} />
    </>
  );
};
