import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import DateTimePicker from './DateTimePicker';
import DateRangePicker from './DateRangePicker';

interface DateProps {
  type: PropTypes.string;
}

function Date({ type, ...others }: DateProps) {
  const typeMap = {
    datePicker: DatePicker,
    timePicker: TimePicker,
    dateTimePicker: DateTimePicker,
    dateRangePicker: DateRangePicker,
  };
  if (!(type in typeMap)) {
    throw new Error(`${type} is not supported`);
  }
  const Component = typeMap[type];
  return <Component {...others} />;
}

export default Date;
