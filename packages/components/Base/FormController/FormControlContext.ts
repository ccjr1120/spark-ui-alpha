import PropTypes from 'prop-types';
import * as React from 'react';

export interface FormControlContextType {
  hasLabel: boolean;
  isError: boolean;
  filled: boolean;
  hasStartAdornment: boolean;
  focused: boolean;
  onFocus: Function;
  onBlur: Function;
}

const FormControlContext = React.createContext<FormControlContextType | null>(
  null
);

export function useFormControl() {
  return React.useContext(FormControlContext);
}

export default FormControlContext;
