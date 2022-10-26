import { ReactNode } from 'react';

interface PickersArrowSwitcherProps {
  className?: string;
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
  onLeftClick?: Function;
  onRightClick?: Function;
  children?: ReactNode;
  leftBtnHidden?: boolean;
  rightBtnHidden?: boolean;
}

export { PickersArrowSwitcherProps };
