import Moment from 'moment';

export const format_ddMMyyyy = 'DD/MM/yyyy';
export const format_dd_mm_yyyy = 'DD-MM-yyyy';
export const format_hhmmDDMM = 'HH:mm, DD/MM';
export const format_DDMMHHmmm = 'DD-MM HH:mm';
export const format_hhMMDDMMYYYY = 'HH:mm, DD/MM/yyyy';
export const format_hhMM_DDMMYYYY = 'HH:mm, DD-MM-yyyy';
export const format_ddmm = 'DD/MM';
export const format_ddMMyyyy_hhmm = 'DD/MM/yyyy  |  hh:mm';
export const format_ddMMyyyy_hhmmss = 'DD/MM/yyyy, hh:mm:ss';
export const format_yyyyMMddTHHmmssZ = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
export const format_yyyyMMdd_HHmmss = 'YYYY-MM-DD HH-mm-ss';
export const format_yyyyMMdd_HHmmssz = 'YYYY-MM-DD HH:mm:ss';
export const format_yyyyMMdd = 'yyyy-MM-DD';
export const format_HHmmss = 'HH:mm:ss';
export const format_DDMMHHmm = 'DD/MM - HH:mm';
export const format_HHmm = 'HH:mm';
export const format_MMDD = 'MM-DD';
export const format_DDMM = 'DD-MM';

export const formatDate = (dateTime: any, format = 'HH:mm DD/MM/yyyy') => {
  return Moment(dateTime).format(format);
};

export const getDiffTime = (
  dateTime: string,
  dateTime2: string,
  format: any = 'seconds'
) => {
  return Moment(dateTime).diff(Moment(dateTime2), format);
};

export const getDiffTimeFromNow = (
  dateTime: string,
  format: any = 'seconds'
) => {
  return Moment(dateTime).diff(Moment(), format);
};
export const startDateWeek = () => {
  const today = Moment();
  return today.startOf('week').add(1, 'day').toDate();
};

export const subtractDayFromToDay = (day: any) => {
  let toDay = new Date();
  const date = Moment(toDay).subtract(day, 'day');
  return date.toDate();
};

export const isSameDate = (day1: any, day2: any) => {
  return Moment(day1).isSame(day2, 'date');
};
