import { FC, Fragment } from 'react';
import { DayCalendarSchedulerUI } from '../DayCalendarSchedulerUI/ui';
import type { MonthCalendarSchedulerUIProps } from './types';

export const MonthCalendarSchedulerUI: FC<MonthCalendarSchedulerUIProps> = ({
  months,
}) => {
  return (
    <div className="flex flex-col w-full h-full min-h-dvh">
      <div className="grid grid-cols-7 grid-rows-1 mb-5">
        {months.map((row, i) => (
          <Fragment key={i + Math.random()}>
            {row.map((day) =>
              i === 0 ? (
                <p className="text-sm text-right mt-1">
                  {day.format('dd').toUpperCase()}
                </p>
              ) : null,
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {months.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <Fragment key={idx}>
              <DayCalendarSchedulerUI day={day} />
            </Fragment>
          ))}
        </Fragment>
      ))}
      </div>
    </div>
  );
};
