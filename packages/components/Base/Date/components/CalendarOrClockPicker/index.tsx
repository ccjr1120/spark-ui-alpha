import { forwardRef, useMemo } from 'react';
import { useNamespace } from '@spark-ui/hooks';
import ClockPicker from '../ClockPicker';
import useViews from '../../hooks/useViews';
import CalendarPicker from '../CalendarPicker';
import DigitalClockPicker from '../DigitalClockPicker';
import CalendarOrClockPickerProps from './interface';

const isDatePickerView = (openView) =>
  openView === 'year' || openView === 'month' || openView === 'day';
const isTimePickerView = (openView) =>
  openView === 'hour' || openView === 'minute';

/**
 * @returns value {views[0]:v1, views[1]:v2, ...}
 */
const CalendarOrClockPicker = forwardRef(
  (props: CalendarOrClockPickerProps, ref: React.LegacyRef<HTMLDivElement>) => {
    const { views, date, onChange, dial = 'number' } = props;
    const ns = useNamespace('calendar-or-clock-picker');
    const { openView, setOpenView, handleChangeAndOpenNext } = useViews({
      view: undefined,
      views,
      onChange,
    });
    const TimePicker = useMemo(
      () => (dial === 'number' ? DigitalClockPicker : ClockPicker),
      [dial]
    );
    return (
      <div ref={ref} aria-label="picker-view-root" className={ns.b()}>
        {isTimePickerView(openView) && (
          <TimePicker
            date={date}
            view={openView}
            views={views.filter(isTimePickerView)}
            onChange={handleChangeAndOpenNext}
            onViewChange={setOpenView}
          />
        )}
        {isDatePickerView(openView) && (
          <CalendarPicker
            date={date}
            view={openView}
            views={views.filter(isDatePickerView)}
            onChange={handleChangeAndOpenNext}
            onViewChange={setOpenView}
          />
        )}
      </div>
    );
  }
);

CalendarOrClockPicker.displayName = 'CalendarOrClockPicker';

export default CalendarOrClockPicker;
