import { ReactNode } from 'react';

export type PanelProps = {
  name: number | string;
  header?: ReactNode;
  children?: ReactNode;
};
