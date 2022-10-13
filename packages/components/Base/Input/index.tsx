import { useNamespace } from '@spark-ui/hooks';
import InputBase from './InputBase';
import FormController, { FormLabel, FormHelperText } from '../FormController';
import InputAdornment from './InputAdornment';
import InputProps from './interface';
import './index.less';

function Input(props: InputProps) {
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
      <InputAdornment>
        {startAdornment}
        <InputBase {...{ value, onChange, placeholder }} />
        {endAdornment}
      </InputAdornment>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormController>
  );
}

export default Input;
