import BasePropTypes from "../types/BasePropTypes";

interface DateRangePickerProps extends BasePropTypes {
    view: string,
    calendars: number,
    value: string,
}

interface DateRangePickerViewProps {
    view: string,
    date: any,
    calendars: number,
    openDateType: string,
    onChange: Function,
}

interface KeyboardRangeDateInputProps {
    renderInput: Function,
    togglePopper: Function,
    startProps: any,
    endProps: any,
}

export { DateRangePickerProps, DateRangePickerViewProps, KeyboardRangeDateInputProps }