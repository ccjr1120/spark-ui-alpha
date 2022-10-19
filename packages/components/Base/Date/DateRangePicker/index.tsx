import useToggle from 'hooks/useToggle';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';
import KeyboardRangeDateInput from './KeyboardRangeDateInput';
import Input from '../../Input';
import BasePropTypes from '../types/BasePropTypes';
import DateRangePickerView from './DateRangePickerView';

const renderInputDefault = ({ ref, startProps, endProps, ...others }) => (
  <div
    ref={ref}
    css={css`
      display: inline-flex;
      align-items: center;
    `}
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
function DateRangePicker(props) {
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
  const [showPopper, setShowPopper] = useToggle(false);
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
      togglePopper={setShowPopper}
      inputProps={inputProps}
      KeyboardDateInputComponent={KeyboardRangeDateInput}
    >
      <DateRangePickerView
        {...{ view, date, openDateType, calendars, onChange: handleChange }}
      />
    </Wrapper>
  );
}

DateRangePicker.propTypes = {
  ...BasePropTypes,
  view: PropTypes.string,
  calendars: PropTypes.number,
  value: PropTypes.arrayOf(PropTypes.string),
};

export default DateRangePicker;
