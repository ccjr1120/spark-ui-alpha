import { forwardRef } from 'react';
import { KeyboardRangeDateInputProps } from './interface';

const KeyboardRangeDateInput = forwardRef((props: KeyboardRangeDateInputProps, ref) => {
  const { togglePopper, startProps, endProps, renderInput } = props;
  const handleToggle = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    togglePopper();
  };
  return renderInput({
    ref,
    togglePopper: handleToggle,
    startProps: { ...startProps },
    endProps: { ...endProps },
  });
});


export default KeyboardRangeDateInput;
