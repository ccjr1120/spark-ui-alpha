import { ReactNode } from "react";

interface ClockPickerProps {
  view: string;
  views: Array<string>;
  date: any;
  onChange: Function;
  onViewChange: Function;
}
interface ClockProps {
  type: string;
  value: number;
  onChange: Function;
  children: ReactNode;
}

interface ClockNumberProps {
  index: number;
  label: string | number;
  inner?: boolean;
}
export { ClockPickerProps, ClockProps, ClockNumberProps };
