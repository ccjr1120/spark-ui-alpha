import { useNamespace } from '@spark-ui/hooks';
import { useFormControl } from '../FormController';
import { InputBaseProps } from './interface';
import './index.less';

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
