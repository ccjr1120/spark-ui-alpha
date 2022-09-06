import { ReactNode } from 'react';

type ButtonProps = {
  size: 'small' | 'large';
  label?: string;
  children?: ReactNode;
};

export default ButtonProps;
