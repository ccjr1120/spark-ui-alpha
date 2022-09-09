import { useNamespace, useClassName } from '@spark-ui/hooks';
import './index.less';
import ButtonProps from './interface';

function Button(props: ButtonProps) {
  const { children, size, type } = props;

  const ns = useNamespace('button');
  const clsNames = useClassName([ns.b(), ns.is(size), ns.is(type)]);
  return (
    <button type="button" className={clsNames}>
      {children}
    </button>
  );
}

export default Button;
