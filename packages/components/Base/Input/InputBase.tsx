import { useNamespace } from '@spark-ui/hooks';
import { useFormControl } from '../FormController';
import './index.less';
import { InputBaseProps } from './interface';

function InputBase(props: InputBaseProps) {
  const ns = useNamespace('input-base');
  const { value, onChange, placeholder } = props;
  const formControl = useFormControl();
  const { hasLabel, focused, onFocus, onBlur } = formControl;
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };
  return (
    <input
      className={ns.b()}
      value={value}
      onChange={handleChange}
      placeholder={hasLabel && !focused ? '' : placeholder}
      {...{ onFocus, onBlur }}
    />
  );
}

export default InputBase;
