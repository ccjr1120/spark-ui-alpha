import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KeyboardRangeDateInput = forwardRef((props, ref) => {
  const { togglePopper, startProps, endProps, renderInput } = props;
  const onClick = (e) => {
    e.stopPropagation();
    togglePopper();
  };
  return renderInput({
    ref,
    onClick,
    startProps: { ...startProps },
    endProps: { ...endProps },
  });
});

KeyboardRangeDateInput.propTypes = {
  renderInput: Function.isRequired,
  togglePopper: Function.isRequired,
  startProps: PropTypes.objectOf(PropTypes.any),
  endProps: PropTypes.objectOf(PropTypes.any),
};

export default KeyboardRangeDateInput;
