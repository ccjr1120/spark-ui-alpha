import dayjs from 'dayjs';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { times } from 'lodash';
import PickersItem from '../PickersItem';

const weekLabels = ['一', '二', '三', '四', '五', '六', '日'];

function DayPicker({ date, onChange, renderDay, ...others }) {
  const [year, month] = useMemo(() => [date.year(), date.month()], [date]);

  const startDayForWeek = useMemo(() => {
    // 获取每月的一号是星期几
    const monthStart = dayjs(`${year}-${month + 1}-1`);
    return monthStart.day() ? monthStart.day() : 7;
  }, [year, month]);

  const dateList = useMemo(() => {
    const dayLen = date.daysInMonth();
    const dayjsDays = times(dayLen, (i) => date.date(i + 1));
    return dayjsDays.map((dayjsDay) => ({
      key: dayjsDay.toString(),
      date: dayjsDay,
      label: dayjsDay.date(),
      isActive: date.isSame(dayjsDay, 'day'),
    }));
  }, [date]);

  return (
    <div
      css={css`
        padding: 0 ${16 / FONT_BASE}rem ${16 / FONT_BASE}rem;
        font-size: ${12 / FONT_BASE}rem;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-row-gap: 2px;
      `}
      {...others}
    >
      {weekLabels.map((label) => (
        <div
          key={label}
          css={css`
            pointer-events: none;
            text-align: center;
            margin-bottom: ${16 / FONT_BASE}rem;
          `}
        >
          {label}
        </div>
      ))}
      {times(startDayForWeek - 1).map((i) => (
        <div key={i} />
      ))}
      {renderDay
        ? dateList.map((day) => renderDay(day))
        : dateList.map((day) => (
            <PickersItem
              {...day}
              height={49}
              onClick={() => onChange(day.date)}
            />
          ))}
    </div>
  );
}

DayPicker.propTypes = {
  value: PropTypes.number,
  date: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  renderDay: PropTypes.func,
};

export default DayPicker;
