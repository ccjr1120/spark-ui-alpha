import * as React from 'react';
import PropTypes from 'prop-types';
import PickersPopper from './PickersPopper';

interface WrapperProps {
  children: PropTypes.node;
  KeyboardDateInputComponent: PropTypes.node;
  inputProps: any;
  showPopper: PropTypes.bool;
  togglePopper: PropTypes.func;
}

function Wrapper(props: WrapperProps) {
  const {
    showPopper,
    togglePopper,
    KeyboardDateInputComponent,
    inputProps,
    children,
  } = props;
  const anchorEl = React.useRef();
  const pickerRef = React.useRef();
  return (
    <>
      <KeyboardDateInputComponent
        {...{ ref: anchorEl, showPopper, togglePopper, ...inputProps }}
      />
      {showPopper && (
        <PickersPopper
          anchorEl={anchorEl}
          pickerEl={pickerRef}
          open={showPopper}
          onClose={togglePopper}
        >
          {React.cloneElement(children, { ref: pickerRef })}
        </PickersPopper>
      )}
    </>
  );
}

export default Wrapper;
