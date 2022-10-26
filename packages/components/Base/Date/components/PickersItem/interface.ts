import { PropTypes } from 'prop-types';
import { MouseEventHandler } from 'react';

interface PickersItemProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  date: any;
  label: number;
  isToday: boolean;
  isActive: boolean;
  height: number;
  borderRadius: string;
}

export { PickersItemProps };
