import { ReactNode } from 'react';

type ButtonProps = {
  type?: 'default' | 'plain' | 'decorated' | 'text';
  size?: 'small' | 'default' | 'large';
  label?: string;
  children?: ReactNode;
};

export default ButtonProps;
