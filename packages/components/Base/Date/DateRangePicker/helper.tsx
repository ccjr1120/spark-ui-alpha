// 这是单元格边框的默认样式,悬浮和选中的样式调整在DateRangePickerItem中
export const getBorderRadiusStyle = ({
  dateType,
  date,
  isStartDate,
  isEndDate,
  isHoverDate,
}) => {
  const radius = dateType === 'day' ? '50%' : '1.5rem';
  let borderRadiusFlag = 0;
  if (dateType === 'day') {
    // 1号、周一、起始日期
    if (date.date() === 1 || date.day() === 1 || isStartDate) {
      borderRadiusFlag += 1;
    }
    // 本月最后一天、周日、结束日期,focus日期
    if (
      date.date() === date.daysInMonth() ||
      date.day() === 0 ||
      isEndDate ||
      isHoverDate
    ) {
      borderRadiusFlag += 2;
    }
  } else if (dateType === 'month') {
    if ((date.month() + 1) % 3 === 1 || isStartDate) {
      borderRadiusFlag += 1;
    }
    if ((date.month() + 1) % 3 === 0 || isEndDate || isHoverDate) {
      borderRadiusFlag += 2;
    }
  } else if (dateType === 'quarter') {
    if (date.quarter() % 2 === 1 || isStartDate) {
      borderRadiusFlag += 1;
    }
    if (date.quarter() % 2 === 0 || isEndDate || isHoverDate) {
      borderRadiusFlag += 2;
    }
  } else if (dateType === 'year') {
    if (date.year() % 4 === 0 || isStartDate) {
      borderRadiusFlag += 1;
    }
    if (date.year() % 4 === 3 || isEndDate || isHoverDate) {
      borderRadiusFlag += 2;
    }
  }
  if (borderRadiusFlag === 1) {
    return {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius
    }
  }
  if (borderRadiusFlag === 2) {
    return {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius
    };
  }
  if (borderRadiusFlag === 3) {
    return { borderRadius: radius }

  }
  return {};
};
// 当该日期处在选择范围内时，且endDate为空是，左右边框的表现
export const getSidesBorderStyle = ({
  dateType,
  date,
  isHoverDate,
  isInRange,
  hasEndDate,
  borderColor,
}) => {
  if (!isInRange || hasEndDate) {
    return {};
  }
  let borderFlag = 0;
  if (dateType === 'day') {
    // 1号、周一、起始日期
    if (date.date() === 1 || date.day() === 1) {
      borderFlag += 1;
    }
    // 本月最后一天、周日、结束日期,focus日期
    if (date.date() === date.daysInMonth() || date.day() === 0 || isHoverDate) {
      borderFlag += 2;
    }
  } else if (dateType === 'month') {
    if ((date.month() + 1) % 3 === 1) {
      borderFlag += 1;
    }
    if ((date.month() + 1) % 3 === 0 || isHoverDate) {
      borderFlag += 2;
    }
  } else if (dateType === 'quarter') {
    if (date.quarter() % 2 === 1) {
      borderFlag += 1;
    }
    if (date.quarter() % 2 === 0 || isHoverDate) {
      borderFlag += 2;
    }
  } else if (dateType === 'year') {
    if (date.year() % 4 === 0) {
      borderFlag += 1;
    }
    if (date.year() % 4 === 3 || isHoverDate) {
      borderFlag += 2;
    }
  }
  if (borderFlag === 1) {
    return {
      borderLeftColor: borderColor
    };
  }
  if (borderFlag === 2) {
    return {
      borderRightColor: borderColor
    };
  }
  if (borderFlag === 3) {
    return {
      borderColor: borderColor
    }
  }
  return {};
};
