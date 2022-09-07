import { ReactNode } from 'react';

type ButtonProps = {
  size?: 'small' | 'default' | 'large';
  label?: string;
  children?: ReactNode;
  color?: string;
};

export default ButtonProps;
