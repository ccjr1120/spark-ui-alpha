import { useClassName, useNamespace } from '@spark-ui/hooks';
import { useFormControl } from '../FormController';
import { FormLabelProps } from './interface';

function FormLabel(props: FormLabelProps) {
  const { shrink: shrinkProp, children } = props;
  const { isError, focused, filled, hasStartAdornment } = useFormControl();
  const ns = useNamespace('form-label');
  let shrink = shrinkProp;
  if (shrink === undefined) {
    shrink = filled || focused || hasStartAdornment;
  }
  const cls = useClassName([ns.b(), ns.useIs('shrink', shrink)]);
  return <div className={cls}>{children}</div>;
}

export default FormLabel;
