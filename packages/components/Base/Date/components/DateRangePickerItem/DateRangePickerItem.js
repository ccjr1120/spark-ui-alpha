import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import dayjs from 'dayjs';

/**
 * isActive在这里被拆成了isStartDate和isEndDate,用不到，但为了防止报no-props的错，还是保留
 */
function DateRangePickerItem({
  isActive,
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
}) {
  const getColor = useColor();
  const actionDayStyle = css`
    background-color: ${getColor('blue')} !important;
    color: ${getColor('white')};
    border: none;
  `;
  return (
    <div
      css={css`
        overflow: hidden;
        height: ${height / FONT_BASE}rem;
        color: ${getColor('gray-black-6')};
        border: 1px dashed transparent;
        ${borderRadius}
        ${sidesBorder}
        ${isInRange &&
        !hasEndDate &&
        `border-top-color:${getColor('gray-black-6')};
          border-bottom-color:${getColor('gray-black-6')};
          `}
        ${isInRange && hasEndDate && 'background:rgba(66, 165, 245, 0.4);'}
      `}
      onMouseMove={() => {
        onFocusedDayChange(date);
      }}
      {...others}
    >
      <div
        css={css`
          height: 100%;
          width: 100%;
          cursor: pointer;
          line-height: ${height / FONT_BASE}rem;
          text-align: center;
          transition: 200ms;
          border-radius: ${innerRadius};
          :hover {
            background: rgba(0, 0, 0, 0.04);
          }
          ${dayjs().isSame(date, 'day') &&
          `border: 1px solid ${getColor('gray-black-6')};`}
          ${(isStartDate || isEndDate) && actionDayStyle}
        `}
      >
        {label}
      </div>
    </div>
  );
}
DateRangePickerItem.propTypes = {
  date: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isStartDate: PropTypes.bool,
  isEndDate: PropTypes.bool,
  hasEndDate: PropTypes.bool,
  isInRange: PropTypes.bool,
  onFocusedDayChange: PropTypes.func,
  isActive: PropTypes.bool,
  isHoverDate: PropTypes.bool,
  borderRadius: PropTypes.objectOf(PropTypes.any),
  sidesBorder: PropTypes.objectOf(PropTypes.any),
  innerRadius: PropTypes.string,
  height: PropTypes.number,
};
export default DateRangePickerItem;
