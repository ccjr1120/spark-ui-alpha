import { times } from 'lodash';
import PickersArrowSwitcher from '../components/PickersArrowSwitcher';
import useRangePickerData from './useRangePickerData';
import DayPicker from '../components/CalendarPicker/DayPicker';
import YearPicker from '../components/CalendarPicker/YearPicker';
import DateRangePickerItem from '../components/DateRangePickerItem';
import MonthPicker from '../components/CalendarPicker/MonthPicker';
import { getBorderRadiusStyle, getSidesBorderStyle } from './helper';
import QuarterPicker from '../components/CalendarPicker/QuarterPicker';
import { DateRangePickerViewProps } from './interface';
import { useNamespace } from '@spark-ui/hooks';
import './index.less'


function DateRangePickerArrowSwitcher({ ...others }) {
  return (
    <PickersArrowSwitcher
      className='spark-date-range-picker__arrow-switcher'
      {...others}
    />
  );
}

const DateRangePickerView =
  (props: DateRangePickerViewProps) => {
    const { view, date, calendars, openDateType, onChange, ...others } = props;
    const ns = useNamespace('date-range-picker-view');
    const {
      opDate,
      opType,
      goNextDate,
      backPreDate,
      getDateOpLabel,
      selectStartDate,
      selectEndDate,
      changeSelectDate,
      hoverDate,
      setHoverDate,
    } = useRangePickerData({
      view,
      date,
      calendars,
      openType: openDateType,
      onChange,
    });
    return (
      <div
        className={ns.b()}
        {...others}
      >
        {times(calendars).map((index) => (
          <div
            key={index}
            className={ns.e('calendar--wrap')}
          >
            {view !== 'year' && (
              <DateRangePickerArrowSwitcher
                leftBtnHidden={index !== 0}
                rightBtnHidden={index !== calendars - 1}
                onLeftClick={backPreDate}
                onRightClick={goNextDate}
              >
                <div
                  className={ns.e('date-label')}
                >
                  {getDateOpLabel(index)}
                </div>
              </DateRangePickerArrowSwitcher>
            )}
            <div
              className={ns.e('date-content')}
            >
              {view === 'day' && (
                <DayPicker
                  date={opDate.add(index, opType)}
                  renderDay={(day) => {
                    const { date: dayDate } = day;
                    const isInRange =
                      selectStartDate &&
                      dayDate.isBetween(
                        selectStartDate,
                        selectEndDate ||
                        (hoverDate?.isAfter(selectStartDate, 'day')
                          ? hoverDate
                          : selectStartDate),
                        'day',
                        '[]'
                      );
                    const handleClick = () => {
                      changeSelectDate(dayDate);
                    };
                    const isStartDate = dayDate.isSame(selectStartDate, 'day');
                    const isEndDate = dayDate.isSame(selectEndDate, 'day');
                    const hasEndDate = !!selectEndDate;
                    const isHoverDate = dayDate.isSame(hoverDate, 'day');
                    const defaultBorderRadiusStyle = getBorderRadiusStyle({
                      dateType: 'day',
                      date: dayDate,
                      isStartDate,
                      isEndDate,
                      isHoverDate,
                    });
                    const borderColor = '#666';
                    const sidesBorderStyle = getSidesBorderStyle({
                      dateType: 'day',
                      date: dayDate,
                      isInRange,
                      hasEndDate,
                      isHoverDate,
                      borderColor
                    });
                    return (
                      <DateRangePickerItem
                        {...day}
                        {...{
                          isInRange,
                          isStartDate,
                          hasEndDate,
                          isHoverDate,
                          isEndDate,
                          onFocusedDayChange: setHoverDate,
                          onClick: handleClick,
                          borderRadius: defaultBorderRadiusStyle,
                          sidesBorder: sidesBorderStyle,
                          innerRadius: '50%',
                        }}
                      />
                    );
                  }}
                />
              )}
              {view === 'month' && (
                <MonthPicker
                  date={opDate.add(index, opType)}
                  renderMonth={(month) => {
                    const { date: monthDate } = month;
                    const isInRange =
                      selectStartDate &&
                      monthDate.isBetween(
                        selectStartDate,
                        selectEndDate ||
                        (hoverDate?.isAfter(selectStartDate, 'month')
                          ? hoverDate
                          : selectStartDate),
                        'day',
                        '[]'
                      );
                    const handleClick = () => {
                      changeSelectDate(monthDate);
                    };
                    const isStartDate = monthDate.isSame(
                      selectStartDate,
                      'month'
                    );
                    const isEndDate = monthDate.isSame(selectEndDate, 'month');
                    const hasEndDate = !!selectEndDate;
                    const isHoverDate = monthDate.isSame(hoverDate, 'month');
                    const defaultBorderRadiusStyle = getBorderRadiusStyle({
                      dateType: 'month',
                      date: monthDate,
                      isStartDate,
                      isEndDate,
                      isHoverDate,
                    });
                    const borderColor = '#666';
                    const sidesBorderStyle = getSidesBorderStyle({
                      dateType: 'month',
                      date: monthDate,
                      isInRange,
                      hasEndDate,
                      isHoverDate,
                      borderColor,
                    });
                    return (
                      <DateRangePickerItem
                        {...month}
                        {...{
                          isInRange,
                          isStartDate,
                          hasEndDate,
                          isEndDate,
                          isHoverDate,
                          onFocusedDayChange: setHoverDate,
                          onClick: handleClick,
                          borderRadius: defaultBorderRadiusStyle,
                          sidesBorder: sidesBorderStyle,
                          innerRadius: '1.5rem',
                        }}
                      />
                    );
                  }}
                />
              )}
              {view === 'quarter' && (
                <QuarterPicker
                  date={opDate.add(index, opType)}
                  renderQuarter={(quarter) => {
                    const { date: quarterDate } = quarter;
                    const isInRange =
                      selectStartDate &&
                      quarterDate.isBetween(
                        selectStartDate,
                        selectEndDate ||
                        (hoverDate?.isAfter(selectStartDate, 'quarter')
                          ? hoverDate
                          : selectStartDate),
                        'day',
                        '[]'
                      );
                    const handleClick = () => {
                      changeSelectDate(quarterDate);
                    };
                    const isStartDate = quarterDate.isSame(
                      selectStartDate,
                      'quarter'
                    );
                    const isEndDate = quarterDate.isSame(
                      selectEndDate,
                      'quarter'
                    );
                    const hasEndDate = !!selectEndDate;
                    const isHoverDate = quarterDate.isSame(
                      hoverDate,
                      'quarter'
                    );
                    const defaultBorderRadiusStyle = getBorderRadiusStyle({
                      dateType: 'quarter',
                      date: quarterDate,
                      isStartDate,
                      isEndDate,
                      isHoverDate,
                    });
                    const borderColor = '#666';
                    const sidesBorderStyle = getSidesBorderStyle({
                      dateType: 'quarter',
                      date: quarterDate,
                      isInRange,
                      hasEndDate,
                      isHoverDate,
                      borderColor,
                    });
                    return (
                      <DateRangePickerItem
                        {...quarter}
                        {...{
                          isInRange,
                          isStartDate,
                          hasEndDate,
                          isEndDate,
                          isHoverDate,
                          onFocusedDayChange: setHoverDate,
                          onClick: handleClick,
                          borderRadius: defaultBorderRadiusStyle,
                          sidesBorder: sidesBorderStyle,
                          innerRadius: '1.5rem',
                        }}
                      />
                    );
                  }}
                />
              )}
              {view === 'year' && (
                <YearPicker
                  date={opDate}
                  renderYear={(year) => {
                    const { date: yearDate } = year;
                    const isInRange =
                      selectStartDate &&
                      yearDate.isBetween(
                        selectStartDate,
                        selectEndDate ||
                        (hoverDate?.isAfter(selectStartDate, 'year')
                          ? hoverDate
                          : selectStartDate),
                        'day',
                        '[]'
                      );
                    const handleClick = () => {
                      changeSelectDate(yearDate);
                    };
                    const isStartDate = yearDate.isSame(
                      selectStartDate,
                      'year'
                    );
                    const isEndDate = yearDate.isSame(selectEndDate, 'year');
                    const hasEndDate = !!selectEndDate;
                    const isHoverDate = yearDate.isSame(hoverDate, 'year');
                    const defaultBorderRadiusStyle = getBorderRadiusStyle({
                      dateType: 'year',
                      date: yearDate,
                      isStartDate,
                      isEndDate,
                      isHoverDate,
                    });
                    const borderColor = '#666';
                    const sidesBorderStyle = getSidesBorderStyle({
                      dateType: 'year',
                      date: yearDate,
                      isInRange,
                      hasEndDate,
                      isHoverDate,
                      borderColor,
                    });
                    return (
                      <DateRangePickerItem
                        {...year}
                        {...{
                          isInRange,
                          isStartDate,
                          hasEndDate,
                          isEndDate,
                          isHoverDate,
                          onFocusedDayChange: setHoverDate,
                          onClick: handleClick,
                          borderRadius: defaultBorderRadiusStyle,
                          sidesBorder: sidesBorderStyle,
                          height: 56,
                          innerRadius: '1.5rem',
                        }}
                      />
                    );
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default DateRangePickerView;
