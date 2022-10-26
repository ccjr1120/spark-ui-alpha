import { ReactNode } from 'react';

type FormControllerProps = {
  value: string;
  children: ReactNode;
  isError: boolean;
  hasStartAdornment: boolean;
  hasLabel: boolean;
  className?: string;
};
type FormLabelProps = {
  shrink?: boolean;
  children: ReactNode;
};
export { FormLabelProps };
export default FormControllerProps;
