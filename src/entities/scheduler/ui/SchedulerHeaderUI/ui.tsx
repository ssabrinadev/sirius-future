import { FC } from 'react';
import dayjs from 'dayjs';
import { Button, LeftArrow, RightArrow, useAppDispatch, useAppSelector } from '@/shared';
import { getSchedulerMonth, getSchedulersIsChanged, setIsChanged, setMonth } from '../..';

export const SchedulerHeaderUI: FC = () => {
  const monthIndex = useAppSelector(getSchedulerMonth);
  const IsChanged = useAppSelector(getSchedulersIsChanged);
  const dispatch = useAppDispatch();

  const handleNextMont = () => {
    dispatch(setMonth(monthIndex + 1));
  };

  const handlePrevMonth = () => {
    dispatch(setMonth(monthIndex - 1));
  };

  const handleReset = () => {
    dispatch(setMonth(dayjs().month()));
  };

  const handleChangeScheduler = () => {
    dispatch(setIsChanged(!IsChanged));
  };

  return (
    <header>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex items-center justify-end flex-1">
          <Button onClick={handleChangeScheduler}>Изменения расписание</Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={LeftArrow}
          alt="left"
          className="cursor-pointer"
          onClick={handlePrevMonth}
        />
        <h1 className="font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            'MMMM YYYY',
          )}
        </h1>
        <img
          src={RightArrow}
          alt="right"
          className="cursor-pointer"
          onClick={handleNextMont}
        />
        <Button onClick={handleReset} variant="outline">
          Сегодня
        </Button>
      </div>
    </header>
  );
};
