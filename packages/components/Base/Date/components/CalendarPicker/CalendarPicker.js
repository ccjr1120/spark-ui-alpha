import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PickersCalendarHeader from './PickersCalendarHeader';
import useViews from '../../hooks/useViews';
import DayPicker from './DayPicker';
import YearPicker from './YearPicker';

function CalendarPicker(props) {
  const { date, view, views, onChange, onViewChange } = props;
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
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <PickersCalendarHeader
        openView={openView}
        views={views}
        onViewChange={setOpenView}
        date={date}
        onMonthChange={handleChangeMonth}
      />
      <div
        css={css`
          flex: 1;
        `}
      >
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

CalendarPicker.propTypes = {
  view: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  onViewChange: PropTypes.func,
};

export default CalendarPicker;
