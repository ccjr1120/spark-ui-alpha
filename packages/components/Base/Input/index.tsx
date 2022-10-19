import { useNamespace } from '@spark-ui/hooks';
import { forwardRef } from 'react';
import InputBase from './InputBase';
import FormController, { FormLabel, FormHelperText } from '../FormController';
import InputAdornment from './InputAdornment';
import InputProps from './interface';
import './index.less';

const Input = forwardRef((props: InputProps, ref) => {
  const {
    label,
    placeholder,
    isError,
    helperText,
    value,
    onChange,
    startAdornment,
    endAdornment,
  } = props;
  const ns = useNamespace('input');
  return (
    <FormController
      {...{
        value,
        isError,
        hasLabel: !!label,
        hasStartAdornment: !!startAdornment,
        className: ns.b(),
      }}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <InputAdornment ref={ref}>
        {startAdornment}
        <InputBase {...{ value, onChange, placeholder }} />
        {endAdornment}
      </InputAdornment>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormController>
  );
});

Input.displayName = 'Input';

export default Input;
