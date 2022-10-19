import { PropTypes } from 'prop-types';

interface PickersArrowSwitcherProps {
  className?: string;
  isLeftDisabled?: PropTypes.bool;
  isRightDisabled?: PropTypes.bool;
  onLeftClick?: PropTypes.func;
  onRightClick?: PropTypes.func;
  children?: PropTypes.node;
  leftBtnHidden?: PropTypes.bool;
  rightBtnHidden?: PropTypes.bool;
}

export { PickersArrowSwitcherProps };
