import { useEffect, useState } from 'react';
import dayjs from 'dayjs/esm/index';
import Wrapper from '../components/Wrapper';
import CalendarOrClockPicker from '../components/CalendarOrClockPicker';
import KeyboardDateInput from '../components/KeyboardDateInput';
import Input from '../../Input';
import DatePickerProps from './interface';

const renderInputDefault = ({ togglePopper, ...args }) => (
  <Input
    endAdornment={
      <span
        style={{ padding: '0 12px', cursor: 'pointer' }}
        onClick={togglePopper}
      >
        📅
      </span>
    }
    {...args}
  />
);
function DatePicker(props: DatePickerProps) {
  const {
    label,
    value,
    onChange,
    valueFormat = 'YYYY-MM-DD',
    views = ['day'],
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
  const [showPopper, setShowPopper] = useState(false);
  const togglePopper = () => {
    setShowPopper((v) => !v);
  };
  const [date, setDate] = useState(dayjs(value, valueFormat));
  // 初始化值、校验值、赋值
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
      togglePopper();
    }
  };

  return (
    <Wrapper
      showPopper={showPopper}
      togglePopper={togglePopper}
      inputProps={inputProps}
      KeyboardDateInputComponent={KeyboardDateInput}
    >
      <CalendarOrClockPicker
        views={views}
        date={date}
        onChange={handleChange}
        {...others}
      />
    </Wrapper>
  );
}

export default DatePicker;
