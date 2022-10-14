import { forwardRef } from 'react';
import PropTypes from 'prop-types';

interface KeyboardDateInputProps {
  togglePopper: PropTypes.func;
  renderInput: PropTypes.node;
  value: PropTypes.string;
  inputType: PropTypes.string;
}

const KeyboardDateInput = forwardRef((props: KeyboardDateInputProps, ref) => {
  const {
    togglePopper,
    renderInput,
    value,
    inputType = 'date',
    ...others
  } = props;
  const handleToggle = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    togglePopper();
  };
  return renderInput({
    ref,
    value,
    togglePopper: handleToggle,
    ...others,
  });
});

KeyboardDateInput.displayName = 'KeyboardDateInput';

export default KeyboardDateInput;
