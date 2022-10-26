import { CSSProperties, ReactNode, ReactPropTypes } from 'react';

type ButtonProps = {
  type?: 'default' | 'plain' | 'decorated' | 'text';
  size?: 'small' | 'default' | 'large';
  children?: ReactNode;
  onClick?: Function;
  style?: CSSProperties;
};

export default ButtonProps;
