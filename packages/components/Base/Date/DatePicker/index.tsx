import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';
import Wrapper from '../components/Wrapper';
import CalendarOrClockPicker from '../components/CalendarOrClockPicker/CalendarOrClockPicker';
import KeyboardDateInput from '../components/KeyboardDateInput';
import Input from '../../Input';
import DatePickerProps from './interface';

const renderInputDefault = (args) => <Input {...args} />;
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
      setShowPopper((v) => !!v);
    }
  };
  return (
    <Wrapper
      showPopper={showPopper}
      togglePopper={setShowPopper}
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
