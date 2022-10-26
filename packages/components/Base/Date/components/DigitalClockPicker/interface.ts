import PropTypes from 'prop-types';

type DigitalClockPickerProps = {
  view: string;
  views: Array<string>;
  date: any;
  onChange: Function;
  onViewChange: Function;
};
interface DigitalClockProps {
  date?: any;
}

export { DigitalClockPickerProps, DigitalClockProps };
