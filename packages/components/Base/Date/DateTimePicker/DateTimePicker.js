import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Wrapper from '../components/Wrapper';
import CalendarOrClockPicker from '../components/CalendarOrClockPicker/CalendarOrClockPicker';
import KeyboardDateInput from '../components/KeyboardDateInput';
import Input from '../../Input';
import BasePropTypes from '../types/BasePropTypes';

const renderInputDefault = ({ inputRef, ...others }) => <Input ref={inputRef} {...others} />;
const DateTimePicker = (props) => {
  const {
    label,
    value,
    onChange,
    valueFormat = 'YYYY-MM-DD HH:mm',
    views = ['year', 'day', 'hour', 'minute'],
    renderInput,
    ...others
  } = props;
  const inputProps = {
    label,
    value,
    valueFormat,
    inputType: 'date',
    renderInput: renderInput || renderInputDefault,
  };
  const [showPopper, setShowPopper] = useToggle(false);
  const [date, setDate] = useState(dayjs(value, valueFormat));
  useEffect(() => {
    if (!dayjs(value, valueFormat).isSame(date)) {
      let dayjsDate = dayjs(value, valueFormat);
      if (!dayjsDate.isValid()) {
        dayjsDate = dayjs();
      }
      setDate(dayjsDate);
    }
  }, [value, valueFormat]);
  const handleChange = (newDate, state) => {
    setDate(newDate);
    if (state === 'finish') {
      onChange(newDate.format(valueFormat));
      setShowPopper();
    }
  };
  return (
    <Wrapper
      showPopper={showPopper}
      togglePopper={setShowPopper}
      inputProps={inputProps}
      KeyboardDateInputComponent={KeyboardDateInput}
    >
      <CalendarOrClockPicker views={views} date={date} onChange={handleChange} {...others} />
    </Wrapper>
  );
};

DateTimePicker.propTypes = {
  ...BasePropTypes,
};

export default DateTimePicker;
