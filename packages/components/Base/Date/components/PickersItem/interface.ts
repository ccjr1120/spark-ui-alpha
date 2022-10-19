import { PropTypes } from 'prop-types';
import { MouseEventHandler } from 'react';

interface PickersItemProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  date: any;
  label: PropTypes.number;
  isToday: PropTypes.bool;
  isActive: PropTypes.bool;
  height: PropTypes.number;
  borderRadius: PropTypes.string;
}

export { PickersItemProps };
