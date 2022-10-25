import { useClassName, useNamespace } from '@spark-ui/hooks';
import dayjs from 'dayjs/esm/index';
import { PickersItemProps } from './interface';
import './index.less';

function PickersItem(props: PickersItemProps) {
  const {
    isActive,
    borderRadius = '50%',
    label,
    date,
    height,
    onClick,
  } = props;
  const ns = useNamespace('date-pickers-item');
  const cls = useClassName([
    ns.b(),
    ns.useIs('active', isActive),
    ns.useIs('today', dayjs().isSame(date, 'day')),
  ]);
  return (
    <div
      style={{ borderRadius, height: `${height}px`, lineHeight: `${height}px` }}
      className={cls}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
export default PickersItem;
