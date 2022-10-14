import { useClassName, useNamespace } from '@spark-ui/hooks';
import { useFormControl } from '../FormController';
import { InputAdornmentProps } from './interface';
import './index.less';

function InputAdornment({ children, ...others }: InputAdornmentProps) {
  const ns = useNamespace('input-adornment');
  const { focused } = useFormControl();
  const cls = useClassName([ns.b(), ns.useIs('focus', focused)]);
  return <div className={cls}>{children}</div>;
}

export default InputAdornment;
