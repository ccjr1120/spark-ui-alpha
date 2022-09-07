import { useNamespace, useClassName } from '@spark-ui/hooks';
import './index.less';
import ButtonProps from './interface';

function Button(props: ButtonProps) {
  const { children, size } = props;

  const ns = useNamespace('button');
  const clsNames = useClassName([
    ns.b(),
    ns.e('base'),
    ns.m(size),
    ns.bem('custom', 'color'),
  ]);
  return (
    <button type="button" className={clsNames}>
      {children}
    </button>
  );
}

export default Button;
