import PropTypes from 'prop-types';

type FormControllerProps = {
  value: PropTypes.string;
  children: PropTypes.node;
  isError: PropTypes.bool;
  hasStartAdornment: PropTypes.bool;
  hasLabel: PropTypes.bool;
  className?: PropTypes.string;
};
type FormLabelProps = {
  shrink?: PropTypes.bool;
  children: PropTypes.node;
};
export { FormLabelProps };
export default FormControllerProps;
