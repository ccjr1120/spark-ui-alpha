import { useClassName, useNamespace } from '@spark-ui/hooks';
import dayjs from 'dayjs/esm/index';
import { DateRangePickerItemProps } from './interface';
import './index.less'

function DateRangePickerItem(props: DateRangePickerItemProps) {
  const {
    isStartDate,
    isEndDate,
    isHoverDate,
    hasEndDate,
    isInRange,
    label,
    date,
    onFocusedDayChange,
    borderRadius,
    sidesBorder,
    innerRadius,
    height = 49,
    ...others
  } = props;
  const ns = useNamespace('date-range-picker-item');
  const wrapperCls = useClassName([
    ns.m('wrapper'),
    ns.useIs('select-range', isInRange && !hasEndDate),
    ns.useIs('selected-range', isInRange && hasEndDate)
  ]);
  const contentCls = useClassName([
    ns.e('content'),
    ns.useIs('today', dayjs().isSame(date, 'day')),
    ns.useIs('active', isStartDate || isEndDate)
  ])
  
  return (
    <div
      style={{ height: `${height}px;`, ...borderRadius, ...sidesBorder }}
      className={wrapperCls}
      onMouseMove={() => {
        onFocusedDayChange(date);
      }}
      {...others}
    >
      <div
        className={contentCls}
        style={{ borderRadius: innerRadius, lineHeight: `${height}px` }}
      >
        {label}
      </div>
    </div>
  );
}
export default DateRangePickerItem;
