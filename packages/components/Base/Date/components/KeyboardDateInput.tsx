import { forwardRef, ReactNode } from 'react';

interface KeyboardDateInputProps {
  togglePopper: Function;
  renderInput: Function;
  value: string;
  inputType: string;
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
