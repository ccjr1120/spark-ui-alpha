import { useMemo, useState } from 'react';
import { useNamespace } from '@spark-ui/hooks';
import FormControlContext, {
  FormControlContextType,
  useFormControl,
} from './FormControlContext';
import FormControllerProps from './interface';
import FormLabel from './FormLabel';
import FormHelperText from './FormHelperText';
import './index.less';

function FormController(props: FormControllerProps) {
  const ns = useNamespace('form-controller');
  const { value, children, isError, hasStartAdornment, hasLabel, className } =
    props;
  const [focusedState, setFocused] = useState(false);
  const contextVals: FormControlContextType = useMemo(
    () => ({
      hasLabel,
      isError,
      filled: !!value,
      hasStartAdornment,
      focused: focusedState,
      onFocus: () => {
        setFocused(true);
      },
      onBlur: () => {
        setFocused(false);
      },
    }),
    [focusedState, hasLabel, isError, hasStartAdornment, value]
  );
  return (
    <FormControlContext.Provider value={contextVals}>
      <div className={`${ns.m('wrap')} ${className}`}>{children}</div>
    </FormControlContext.Provider>
  );
}

export { useFormControl, FormLabel, FormHelperText };
export default FormController;
