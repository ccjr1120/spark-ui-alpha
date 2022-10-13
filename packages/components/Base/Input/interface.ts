import PropTypes from 'prop-types';

type InputProps = {
  label?: PropTypes.string;
  placeholder?: PropTypes.string;
  isError?: PropTypes.bool;
  helperText?: PropTypes.string;
  value?: PropTypes.string;
  onChange?: PropTypes.func;
  startAdornment?: PropTypes.node;
  endAdornment?: PropTypes.node;
};

type InputBaseProps = {
  value: string | number;
  onChange?: PropTypes.func;
  placeholder?: PropTypes.string;
};

type InputAdornmentProps = {
  children: PropTypes.node;
};
export { InputBaseProps, InputAdornmentProps };

export default InputProps;
