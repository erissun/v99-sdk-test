import moment from 'moment/moment';
import { isSameDate, startDateWeek, subtractDayFromToDay } from '../Utils';

export const TimePeriod = {
  today: 'day',
  thisWeek: 'thisWeek',
  thisMonth: 'thisMonth',
  t30day: 't30day',
  t90day: 't90day',
};

type Pair = {
  key: string;
  value: string;
};

export const TimePeriods: Pair[] = [
  {
    key: TimePeriod.today,
    value: 'activity.today',
  },
  {
    key: TimePeriod.thisWeek,
    value: 'activity.thisWeek',
  },
  {
    key: TimePeriod.thisMonth,
    value: 'activity.thisMonth',
  },
  {
    key: TimePeriod.t30day,
    value: 'activity.t30day',
  },
  {
    key: TimePeriod.t90day,
    value: 'activity.t90day',
  },
];

export const getTimePeriod = (fromDate: string, toDate: string) => {
  const _now = new Date();
  if (isSameDate(fromDate, _now)) {
    return TimePeriod.today;
  }
  if (!isSameDate(toDate, _now)) {
    return null;
  }
  if (isSameDate(fromDate, startDateWeek())) {
    return TimePeriod.thisWeek;
  }
  if (isSameDate(fromDate, moment().startOf('month').toDate())) {
    return TimePeriod.thisMonth;
  }
  if (isSameDate(fromDate, subtractDayFromToDay(30))) {
    return TimePeriod.t30day;
  }
  if (isSameDate(fromDate, subtractDayFromToDay(90))) {
    return TimePeriod.t90day;
  }
  return null;
};

export const getTimePeriodWord = (timePeriod: any): string | undefined => {
  return TimePeriods.find((tp) => tp.key === timePeriod)?.value;
};
