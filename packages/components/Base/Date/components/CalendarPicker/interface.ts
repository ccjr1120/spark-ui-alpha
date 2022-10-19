import PropTypes from 'prop-types';

type CalendarPickerProps = {
  view: PropTypes.string;
  views: Array<string>;
  date: any;
  onChange: PropTypes.func;
  onViewChange: PropTypes.func;
};

interface DayPickerProps {
  value?: PropTypes.number;
  date: any;
  onChange: PropTypes.func;
  renderDay?: PropTypes.func;
}

interface MonthPickerProps {
  date: any;
  onChange: PropTypes.func;
  renderMonth: PropTypes.func;
}

interface YearPickerProps {
  date: any;
  onChange: PropTypes.func;
  renderYear?: PropTypes.func;
}
interface QuarterPickerProps {
  date: any;
  onChange: PropTypes.func;
  renderQuarter?: PropTypes.func;
}
interface PickersCalendarHeaderProps {
  openView: PropTypes.string;
  date: any;
  views: Array<string>;
  onViewChange: PropTypes.func;
  onMonthChange: PropTypes.func;
}
export {
  CalendarPickerProps,
  DayPickerProps,
  MonthPickerProps,
  YearPickerProps,
  QuarterPickerProps,
  PickersCalendarHeaderProps,
};
