import { PropTypes } from 'prop-types';

interface ClockPickerProps {
  view: PropTypes.string;
  views: Array<string>;
  date: any;
  onChange: PropTypes.func;
  onViewChange: PropTypes.func;
}
interface ClockProps {
  type: PropTypes.string;
  value: PropTypes.number;
  onChange: PropTypes.func;
  children: PropTypes.node;
}

interface ClockNumberProps {
  index: PropTypes.number;
  label: string | number;
  inner?: PropTypes.bool;
}
export { ClockPickerProps, ClockProps, ClockNumberProps };
