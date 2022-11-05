import { useMemo, useState } from 'react';
import dayjs from 'dayjs/esm/index';
import Wrapper from '../components/Wrapper';
import KeyboardRangeDateInput from './KeyboardRangeDateInput';
import Input from '../../Input';
import DateRangePickerView from './DateRangePickerView';
import './index.less'
import { DateRangePickerProps } from './interface';
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween);

const renderInputDefault = ({ ref, startProps, endProps, togglePopper, ...others }) => (
  <div
    ref={ref}
    style={{ display: 'inline-flex', alignItems: 'center' }}
    onClick={togglePopper}
    {...others}
  >
    <Input {...startProps} />
    <span>至</span>
    <Input {...endProps} />
  </div>
);
/**
 * 分别支持选择年、月、季度、日的日期范围选择器,由view指定
 * 返回结果的干净程度由提供的valueFormat决定，因为即使只指定了月或年的时候，最后的值依旧是完整的日期
 */
function DateRangePicker(props: DateRangePickerProps) {
  const {
    label,
    value,
    onChange,
    calendars = 2,
    valueFormat = 'YYYY-MM-DD',
    view = 'day',
    renderInput,
  } = props;
  const inputProps = {
    label,
    startProps: {
      value: value[0] || '',
    },
    endProps: {
      value: value[1] || '',
    },
    valueFormat,
    inputType: 'date',
    renderInput: renderInput || renderInputDefault,
  };
  const [showPopper, setShowPopper] = useState(false);
  const togglePopper = () => {
    setShowPopper((v) => !v);
  };
  const date = useMemo(
    () =>
      value && value.length === 2
        ? [dayjs(value[0], valueFormat), dayjs(value[1], valueFormat)]
        : [null, null],
    [value, valueFormat]
  );
  // 由单击的输入框决定弹出框是起始日期还是结束日期，未实现
  const [openDateType] = useState('start');
  const handleChange = (newDate) => {
    if (newDate.length === 2) {
      onChange(newDate.map((d) => d.format(valueFormat)));
    }
  };
  return (
    <Wrapper
      showPopper={showPopper}
      togglePopper={togglePopper}
      inputProps={inputProps}
      KeyboardDateInputComponent={KeyboardRangeDateInput}
    >
      <DateRangePickerView
        {...{ view, date, openDateType, calendars, onChange: handleChange }}
      />
    </Wrapper>
  );
}

export default DateRangePicker;
