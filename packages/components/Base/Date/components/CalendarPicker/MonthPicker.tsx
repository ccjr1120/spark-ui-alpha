import PropTypes from 'prop-types';
import { times } from 'lodash';
import { useMemo } from 'react';
import { useNamespace } from '@spark-ui/hooks';
import PickersItem from '../PickersItem';
import { MonthPickerProps } from './interface';

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
function MonthPicker(props: MonthPickerProps) {
  const { date, onChange, renderMonth } = props;
  const ns = useNamespace('month-picker');
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
    <div className={ns.b()}>
      {renderMonth
        ? monthList.map((item) => renderMonth(item))
        : monthList.map((month) => (
            <PickersItem
              key={month.key}
              height={48}
              borderRadius="1.5rem"
              onClick={() => onChange(month.date)}
              {...month}
            />
          ))}
    </div>
  );
}

export default MonthPicker;
