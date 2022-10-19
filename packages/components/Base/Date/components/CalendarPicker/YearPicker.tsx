import { useNamespace } from '@spark-ui/hooks';
import { times } from 'lodash';
import { useLayoutEffect, useMemo, useRef } from 'react';
import PickersItem from '../PickersItem';
import { YearPickerProps } from './interface';
import './index.less';

const startYear = 1900;
const endYear = 2077;
const cellHeight = 56;
const cloumnNum = 4;
function YearPicker(props: YearPickerProps) {
  const { date, onChange, renderYear, ...others } = props;
  const ns = useNamespace('year-picker');
  const year = date.year();
  const containerRef = useRef<HTMLDivElement>();
  // 根据curYear计算ContainerRef的滚动高度
  useLayoutEffect(() => {
    // 减二是为了让它的显示位置稍靠中间
    const rowNum = Math.floor((year - startYear) / cloumnNum);
    const offsetTop = rowNum * cellHeight;
    containerRef.current.scrollTop = offsetTop;
  }, [year]);
  const yearList = useMemo(
    () =>
      times(endYear - startYear, (i) => ({
        key: `${year}-${i + 1}`,
        date: date.year(startYear + i),
        label: startYear + i,
        isActive: year === startYear + i,
      })),
    [date, year]
  );
  return (
    <div className={ns.b()}>
      <div ref={containerRef} className={ns.e('item')}>
        {renderYear
          ? yearList.map((item) => renderYear(item))
          : yearList.map((item) => (
              <PickersItem
                key={item.key}
                height={56}
                borderRadius="1.5rem"
                onClick={() => onChange(item.date)}
                {...item}
              />
            ))}
      </div>
    </div>
  );
}

export default YearPicker;
