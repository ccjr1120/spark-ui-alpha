import './index.less';
import ButtonProps from './interface';

function Button(props: ButtonProps) {
  const { label, children } = props;
  return (
    <button type="button" className="spark-button">
      {label || children}
    </button>
  );
}

export default Button;
