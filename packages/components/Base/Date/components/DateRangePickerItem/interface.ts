import { PropTypes } from 'prop-types';

interface DateRangePickerItemProps {
  date: any;
  label: number | string;
  isStartDate: PropTypes.bool;
  isEndDate: PropTypes.bool;
  hasEndDate: PropTypes.bool;
  isInRange: PropTypes.bool;
  onFocusedDayChange: PropTypes.func;
  isActive: PropTypes.bool;
  isHoverDate: PropTypes.bool;
  borderRadius: any;
  sidesBorder: any;
  innerRadius: PropTypes.string;
  height: PropTypes.number;
}

export { DateRangePickerItemProps };
