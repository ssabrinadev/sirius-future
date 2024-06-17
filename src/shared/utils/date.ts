import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const getMonth = (month = dayjs().month()): dayjs.Dayjs[][] => {
  dayjs.locale('ru');
  month = Math.floor(month);

  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    }),
  );

  return daysMatrix;
};
