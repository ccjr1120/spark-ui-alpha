import { useNamespace } from '@spark-ui/hooks';
import { times } from 'lodash';
import { useMemo } from 'react';
import PickersItem from '../PickersItem';
import { QuarterPickerProps } from './interface';

const chsMonth = ['', '第一季度', '第二季度', '第三季度', '第四季度'];
function QuarterPicker(props: QuarterPickerProps) {
  const { date, onChange, renderQuarter } = props;
  const ns = useNamespace('quarter-picker');
  const quarterList = useMemo(() => {
    const year = date.year();
    const quarter = date.quarter();
    return times(4, (i) => ({
      key: `${year}-${i + 1}`,
      date: date.quarter(i + 1),
      label: chsMonth[i + 1],
      isActive: i + 1 === quarter,
    }));
  }, [date]);
  return (
    <div className={ns.b()}>
      {renderQuarter
        ? quarterList.map((item) => renderQuarter(item))
        : quarterList.map((quarter) => (
            <PickersItem
              key={quarter.key}
              height={48}
              borderRadius="1.5rem"
              {...quarter}
            />
          ))}
    </div>
  );
}

export default QuarterPicker;
