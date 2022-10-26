import { ReactNode } from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  helperText?: string;
  value?: string;
  onChange?: Function;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

type InputBaseProps = {
  value: string | number;
  onChange?: Function;
  placeholder?: string;
};

type InputAdornmentProps = {
  children: ReactNode;
};
export { InputBaseProps, InputAdornmentProps };

export default InputProps;
