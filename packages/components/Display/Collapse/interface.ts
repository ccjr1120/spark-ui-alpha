import { ReactNode } from 'react';

export type CollapseProps = {
  children?: ReactNode;
  value: Array<number | string> | number | string;
  onChange: (
    curName: number | string,
    nextVal: Array<number | string> | number | string
  ) => void;
};
