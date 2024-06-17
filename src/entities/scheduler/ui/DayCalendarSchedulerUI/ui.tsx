import { FC, useCallback } from 'react';
import dayjs from 'dayjs';
import { DayCalendarSchedulerUIProps } from './types';
import { cn, useAppDispatch, useAppSelector } from '@/shared';
import {
    getSchedulersIsChanged, setIsChanged,
    setSchedulerDay,
    setSchedulers, toggleSchedulersDetailsModal,
    toggleSchedulersModal,
    toggleSchedulersUpdateModal,
} from "@/entities";


export const DayCalendarSchedulerUI: FC<DayCalendarSchedulerUIProps> = ({
  day,
}) => {
  const dispatch = useAppDispatch();
  const isChanged = useAppSelector(getSchedulersIsChanged);

  const handleOpenCreateModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      dispatch(toggleSchedulersModal(true));
      dispatch(setSchedulerDay(day));
    },
    [day, dispatch],
  );

  const handleOpenDetailsModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, evt: any) => {
      e.stopPropagation();
      dispatch(setSchedulers(evt));
      dispatch(setSchedulerDay(day));
      if (isChanged) {
        dispatch(toggleSchedulersUpdateModal(true));
        dispatch(setIsChanged(false));
        return;
      }
      dispatch(toggleSchedulersDetailsModal(true));
    },
    [day, dispatch, isChanged],
  );

  return (
    <div
      className="border p-1 border-gray-200 flex flex-col cursor-pointer hover:shadow-lg"
      onClick={handleOpenCreateModal}
    >
      <header className="flex flex-col items-end">
        <p
          className={cn('text-sm p-1 my-1 text-center', {
            'bg-primary-purple-400 text-white rounded-full w-7':
              day.format('DD-MM-YY') === dayjs().format('DD-MM-YY'),
          })}
        >
          {day.format('DD')}
        </p>
      </header>
      <div className="flex flex-col max-h-28 overflow-auto gap-1 flex-1 cursor-pointer">
        {day.data.length
          ? day?.data?.map((evt, idx) => (
              <div
                key={idx}
                onClick={(e) => handleOpenDetailsModal(e, evt)}
                className={cn(
                  'p-1 text-xs border border-gray-200 hover:bg-gray-100 rounded cursor-pointer hover:shadow transition',
                  { 'animate-wiggle': isChanged },
                )}
                style={{ backgroundColor: evt.color }}
              >
                <h1 className="">
                  {evt.timeFrom}-{evt.timeTo}
                </h1>
                <h2 className="text-xs">{evt.title}</h2>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
