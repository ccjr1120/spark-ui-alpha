import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import DateTimePicker from './DateTimePicker';
import DateRangePicker from './DateRangePicker';

const Date = ({ type, ...others }) => {
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
};

Date.propTypes = {
  type: PropTypes.string,
};

export default Date;
