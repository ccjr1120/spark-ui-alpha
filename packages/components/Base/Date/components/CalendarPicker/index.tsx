import { useNamespace } from '@spark-ui/hooks';
import PickersCalendarHeader from './PickersCalendarHeader';
import useViews from '../../hooks/useViews';
import DayPicker from './DayPicker';
import YearPicker from './YearPicker';
import { CalendarPickerProps } from './interface';
import './index.less';

function CalendarPicker(props: CalendarPickerProps) {
  const { date, view, views, onChange, onViewChange } = props;
  const ns = useNamespace('calendar-picker');
  const { openView, setOpenView, handleChangeAndOpenNext } = useViews({
    view,
    views,
    onChange,
    onViewChange,
  });
  const handleChangeMonth = (opVal) => {
    handleChangeAndOpenNext(date.add(opVal, 'month'));
  };
  const handleChangeYear = (newDate) => {
    handleChangeAndOpenNext(newDate, 'finish');
  };
  const handleChangeDay = (newDate) => {
    handleChangeAndOpenNext(newDate, 'finish');
  };
  return (
    <div className={ns.m('root')}>
      <PickersCalendarHeader
        openView={openView}
        views={views}
        onViewChange={setOpenView}
        date={date}
        onMonthChange={handleChangeMonth}
      />
      <div className={ns.e('content')}>
        {openView === 'year' && (
          <YearPicker date={date} onChange={handleChangeYear} />
        )}
        {openView === 'day' && (
          <DayPicker date={date} onChange={handleChangeDay} />
        )}
      </div>
    </div>
  );
}

export default CalendarPicker;
