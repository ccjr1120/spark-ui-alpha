import { CSSProperties, ReactNode, ReactPropTypes } from 'react';
import PropTypes from 'prop-types';

type ButtonProps = {
  type?: 'default' | 'plain' | 'decorated' | 'text';
  size?: 'small' | 'default' | 'large';
  children?: ReactNode;
  onClick?: PropTypes.func;
  style?: CSSProperties;
};

export default ButtonProps;
