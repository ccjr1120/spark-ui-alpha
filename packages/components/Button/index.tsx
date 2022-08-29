import './index.module.css';
import ButtonProps from './interface';

function Button(props: ButtonProps) {
  const { label, children } = props;
  return (
    <button type="button" className="test">
      {label || children}
    </button>
  );
}

export default Button;
