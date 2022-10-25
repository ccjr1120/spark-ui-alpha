import { useNamespace } from '@spark-ui/hooks';
import dayjs from 'dayjs/esm/index';
import { DateRangePickerItemProps } from './interface';

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
  // const actionDayStyle = css`
  //   background-color: ${getColor('blue')} !important;
  //   color: ${getColor('white')};
  //   border: none;
  // `;
  return (
    <div
      // css={css`
      //   overflow: hidden;
      //   height: ${height / FONT_BASE}rem;
      //   color: ${getColor('gray-black-6')};
      //   border: 1px dashed transparent;
      //   ${borderRadius}
      //   ${sidesBorder}
      //   ${isInRange &&
      //   !hasEndDate &&
      //   `border-top-color:${getColor('gray-black-6')};
      //     border-bottom-color:${getColor('gray-black-6')};
      //     `}
      //   ${isInRange && hasEndDate && 'background:rgba(66, 165, 245, 0.4);'}
      // `}
      className={ns.m('wrapper')}
      onMouseMove={() => {
        onFocusedDayChange(date);
      }}
      {...others}
    >
      <div
        // css={css`
        //   height: 100%;
        //   width: 100%;
        //   cursor: pointer;
        //   line-height: ${height / FONT_BASE}rem;
        //   text-align: center;
        //   transition: 200ms;
        //   border-radius: ${innerRadius};
        //   :hover {
        //     background: rgba(0, 0, 0, 0.04);
        //   }
        //   ${dayjs().isSame(date, 'day') &&
        //   `border: 1px solid ${getColor('gray-black-6')};`}
        //   ${(isStartDate || isEndDate) && actionDayStyle}
        // `}
        className={ns.e('content')}
      >
        {label}
      </div>
    </div>
  );
}
export default DateRangePickerItem;
