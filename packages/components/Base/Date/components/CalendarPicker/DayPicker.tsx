import dayjs from 'dayjs/esm/index';
import { useMemo } from 'react';
import { times } from 'lodash';
import { useNamespace } from '@spark-ui/hooks';
import PickersItem from '../PickersItem';
import { DayPickerProps } from './interface';
import './index.less';

const weekLabels = ['一', '二', '三', '四', '五', '六', '日'];

function DayPicker(props: DayPickerProps) {
  const { date, onChange, renderDay } = props;
  const ns = useNamespace('day-picker');
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
    <div className={ns.b()}>
      {weekLabels.map((label) => (
        <div key={label} className={ns.e('item')}>
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
              key={day.key}
              {...day}
              height={52}
              onClick={() => onChange(day.date)}
            />
          ))}
    </div>
  );
}

export default DayPicker;
