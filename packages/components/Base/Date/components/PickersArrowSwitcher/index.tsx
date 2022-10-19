import { useNamespace } from '@spark-ui/hooks';
import Button from '../../../Button';
import { PickersArrowSwitcherProps } from './interface';

function PickersArrowSwitcher(props: PickersArrowSwitcherProps) {
  const {
    isLeftDisabled = false,
    isRightDisabled = false,
    leftBtnHidden = false,
    rightBtnHidden = false,
    onLeftClick,
    onRightClick,
    children,
    className,
  } = props;
  const ns = useNamespace('pickers-arrow-switcher');
  return (
    <div className={`${ns.m('wrap')} ${className}`}>
      <Button
        style={{ marginRight: '0.8rem' }}
        onClick={onLeftClick}
        type="text"
      >
        {'<'}
      </Button>
      {children}
      <Button onClick={onRightClick} type="text">
        {'>'}
      </Button>
    </div>
  );
}

export default PickersArrowSwitcher;
