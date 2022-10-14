import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import dayjs from 'dayjs';

const PickersItem = ({ isActive, borderRadius = '50%', label, date, height, ...others }) => {
  const getColor = useColor();
  const actionDayStyle = css`
    background-color: ${getColor('blue')} !important;
    color: ${getColor('white')};
    border: none;
  `;
  return (
    <div
      css={css`
        color: ${getColor('gray-black-6')};
      `}
      {...others}
    >
      <div
        css={css`
          width: 100%;
          height: ${height / FONT_BASE}rem;
          border-radius: ${borderRadius};
          cursor: pointer;
          line-height: ${height / FONT_BASE}rem;
          text-align: center;
          transition: 200ms;
          :hover {
            background: rgba(0, 0, 0, 0.04);
          }
          ${dayjs().isSame(date, 'day') && `border: 1px solid ${getColor('gray-black-6')};`}
          ${isActive && actionDayStyle}
        `}
      >
        {label}
      </div>
    </div>
  );
};
PickersItem.propTypes = {
  date: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.number,
  isToday: PropTypes.bool,
  isActive: PropTypes.bool,
  height: PropTypes.number,
  borderRadius: PropTypes.string,
};
export default PickersItem;
