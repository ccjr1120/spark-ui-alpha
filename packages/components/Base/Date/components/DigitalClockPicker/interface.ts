import PropTypes from 'prop-types';

type DigitalClockPickerProps = {
  view: PropTypes.string;
  views: Array<string>;
  date: any;
  onChange: PropTypes.func;
  onViewChange: PropTypes.func;
};
interface DigitalClockProps {
  date?: any;
}

export { DigitalClockPickerProps, DigitalClockProps };
