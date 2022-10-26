import { ReactNode } from 'react';

type BasePropTypes = {
  label: string;
  className: string;
  clearable: boolean;
  disabled: boolean;
  autoFocus: boolean;
  value: string;
  valueFormat: string;
  onChange: Function;
  views: Array<string>;
  renderInput: ReactNode;
};

export default BasePropTypes;
