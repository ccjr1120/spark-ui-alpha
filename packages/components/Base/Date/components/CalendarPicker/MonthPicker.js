import PropTypes from 'prop-types';
import { times } from 'lodash';
import { css } from '@emotion/react';
import { useMemo } from 'react';
import PickersItem from '../PickersItem';

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
function MonthPicker({ date, onChange, renderMonth, ...others }) {
  const monthList = useMemo(() => {
    const year = date.year();
    const month = date.month();
    return times(12, (i) => ({
      key: `${year}-${i + 1}`,
      date: date.month(i),
      label: chsMonth[i],
      isActive: i === month,
    }));
  }, [date]);
  return (
    <div
      css={css`
        display: grid;
        grid-row-gap: 4px;
        grid-template-columns: repeat(${3}, 1fr);
        padding: 0 ${16 / FONT_BASE}rem ${16 / FONT_BASE}rem;
        overflow: auto;
      `}
      {...others}
    >
      {renderMonth
        ? monthList.map((item) => renderMonth(item))
        : monthList.map((month) => (
            <PickersItem
              height={48}
              borderRadius="1.5rem"
              {...month}
              onClick={() => onChange(month.date)}
            />
          ))}
    </div>
  );
}

MonthPicker.propTypes = {
  date: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func,
  renderMonth: PropTypes.func,
};

export default MonthPicker;
