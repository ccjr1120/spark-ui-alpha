import { ReactNode } from 'react';

export type CollapseProps = {
  children?: ReactNode;
  value: number | string;
  onChange: (curName: number | string) => void;
};

export type PanelProps = {
  name: number | string;
  children?: ReactNode;
};
