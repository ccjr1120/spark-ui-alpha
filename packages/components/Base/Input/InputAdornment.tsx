import { useClassName, useNamespace } from '@spark-ui/hooks';
import { forwardRef, LegacyRef } from 'react';
import { useFormControl } from '../FormController';
import './index.less';
import { InputAdornmentProps } from './interface';

const InputAdornment = forwardRef(
  ({ children, ...others }: InputAdornmentProps, ref: LegacyRef<any>) => {
    const ns = useNamespace('input-adornment');
    const { focused } = useFormControl();
    const cls = useClassName([ns.b(), ns.useIs('focus', focused)]);
    return (
      <div ref={ref} className={cls}>
        {children}
      </div>
    );
  }
);
InputAdornment.displayName = 'InputAdornment';

export default InputAdornment;
