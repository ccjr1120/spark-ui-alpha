import { useNamespace } from '@spark-ui/hooks';
import PickersArrowSwitcher from '../PickersArrowSwitcher';
import { PickersCalendarHeaderProps } from './interface';

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
function PickersCalendarHeader(props: PickersCalendarHeaderProps) {
  const { date, openView, views, onViewChange, onMonthChange } = props;
  const ns = useNamespace('pickers-calendar-header');
  return (
    <div className={ns.b()}>
      <div className={ns.m('wrapper')}>
        <div className={ns.e('text')}>
          <span>{chsMonth[date.month()] || ''}</span>
          <span>{date.year() || ''}</span>
        </div>
        <div
          className={`${ns.e('icon')} ${ns.useIs('year', openView === 'year')}`}
          onClick={() => onViewChange(openView === 'year' ? 'day' : 'year')}
        >
          {'<'}
        </div>
      </div>
      <PickersArrowSwitcher
        onLeftClick={() => onMonthChange(-1)}
        onRightClick={() => onMonthChange(1)}
      />
    </div>
  );
}

export default PickersCalendarHeader;
