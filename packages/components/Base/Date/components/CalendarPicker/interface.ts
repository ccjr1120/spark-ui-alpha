type CalendarPickerProps = {
  view: string;
  views: Array<string>;
  date: any;
  onChange: Function;
  onViewChange: Function;
};

interface DayPickerProps {
  value?: number;
  date: any;
  onChange?: Function;
  renderDay?: Function;
}

interface MonthPickerProps {
  date: any;
  onChange?: Function;
  renderMonth: Function;
}

interface YearPickerProps {
  date: any;
  onChange?: Function;
  renderYear?: Function;
}
interface QuarterPickerProps {
  date: any;
  onChange?: Function;
  renderQuarter?: Function;
}
interface PickersCalendarHeaderProps {
  openView: string;
  date: any;
  views: Array<string>;
  onViewChange: Function;
  onMonthChange: Function;
}
export {
  CalendarPickerProps,
  DayPickerProps,
  MonthPickerProps,
  YearPickerProps,
  QuarterPickerProps,
  PickersCalendarHeaderProps,
};
