interface DateRangePickerItemProps {
  date: any;
  label: number | string;
  isStartDate: boolean;
  isEndDate: boolean;
  hasEndDate: boolean;
  isInRange: boolean;
  onFocusedDayChange: Function;
  isActive: boolean;
  isHoverDate: boolean;
  borderRadius: any;
  sidesBorder: any;
  innerRadius: string;
  height: number;
}

export { DateRangePickerItemProps };
