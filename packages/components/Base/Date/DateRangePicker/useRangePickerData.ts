/* eslint-disable no-nested-ternary */
import * as dayjs from 'dayjs';
import { useMemo, useState } from 'react';

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
export default ({ view, date, openType, calendars, onChange }) => {
  // 除了day是月份，年为空之外，季度和月份都是操作年份
  const opType = view === 'day' ? 'month' : view === 'year' ? null : 'year';
  const [hoverDate, setHoverDate] = useState(null);
  const [selectDate, setSelectDate] = useState(date);
  const [selectStartDate, selectEndDate] = useMemo(
    () => selectDate,
    [selectDate]
  );
  const [opDate, setOpDate] = useState(
    openType === 'start'
      ? date[0] ?? dayjs()
      : date[1]
      ? date[1].add(-calendars + 1, opType)
      : dayjs().add(-calendars + 1, opType)
  );
  const goNextDate = () => {
    setOpDate((preDate) => preDate.add(1, opType));
  };
  const backPreDate = () => {
    setOpDate((preDate) => preDate.add(-1, opType));
  };
  const getDateOpLabel = (index) => {
    const newDate = opDate.add(index, opType);
    return `${
      opType === 'month' ? chsMonth[newDate.month()] : ''
    }  ${newDate.year()}年`;
  };
  /**
   * 这里的逻辑比mui里面简单很多，不处理那些复杂的情况了
   * 如果start和end都有值，重新开始
   * 如果start为空，给start
   * 如果start不为空, end为空
   * 判断newDate在start之前还是之后
   * 在之前就重新开始, 之后就给EndDate赋值
   * @param {dayjs object} upVal 待更新的date
   */
  const changeSelectDate = (newDate) => {
    if (selectStartDate && selectEndDate) {
      setSelectDate([newDate, null]);
      return;
    }
    if (!selectStartDate) {
      setSelectDate([newDate, null]);
      return;
    }
    if (selectStartDate && newDate.isBefore(selectStartDate)) {
      setSelectDate([newDate, null]);
      return;
    }
    setSelectDate([selectStartDate, newDate]);
    onChange?.([selectStartDate, newDate]);
  };

  return {
    opDate,
    opType,
    goNextDate,
    backPreDate,
    getDateOpLabel,
    selectStartDate,
    selectEndDate,
    hoverDate,
    setHoverDate: (v) => {
      if (!selectEndDate) setHoverDate(v);
    },
    changeSelectDate,
  };
};
