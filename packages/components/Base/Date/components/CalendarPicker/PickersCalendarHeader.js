import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import { css } from '@emotion/react';
import Icon from 'components/Icon';
import PickersArrowSwitcher from '../PickersArrowSwitcher';

const chsMonth = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];
function PickersCalendarHeader({
  date,
  openView,
  views,
  onViewChange,
  onMonthChange,
  ...others
}) {
  const getColor = useColor();
  return (
    <div
      css={css`
        padding: ${16 / FONT_BASE}rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
      {...others}
    >
      <div
        css={css`
          cursor: pointer;
          color: ${getColor('gray-black-3')};
          display: flex;
          align-items: center;
          font-size: ${16 / FONT_BASE}rem;
        `}
      >
        <div
          css={css`
            font-weight: 600;
            display: flex;
            align-items: center;
          `}
        >
          <span>{chsMonth[date.month()] || ''}</span>
          <span
            css={css`
              margin-left: ${16 / FONT_BASE}rem;
            `}
          >
            {date.year() || ''}
          </span>
        </div>
        <Icon
          css={css`
            margin-left: ${32 / FONT_BASE}rem;
            transition: 0.4s;
            top: 2px;
            transform: rotateZ(${openView === 'year' ? 0 : 180}deg);
          `}
          code="e713"
          color={getColor('gray-black-6')}
          onClick={() => onViewChange(openView === 'year' ? 'day' : 'year')}
        />
      </div>
      <PickersArrowSwitcher
        onLeftClick={() => onMonthChange(-1)}
        onRightClick={() => onMonthChange(1)}
      />
    </div>
  );
}

PickersCalendarHeader.propTypes = {
  openView: PropTypes.string,
  date: PropTypes.objectOf(PropTypes.any),
  views: PropTypes.arrayOf(PropTypes.string),
  onViewChange: PropTypes.func,
  onMonthChange: PropTypes.func,
};

export default PickersCalendarHeader;
