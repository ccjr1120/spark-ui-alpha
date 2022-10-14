import PropTypes from 'prop-types';

type BasePropTypes = {
  label: PropTypes.string;
  className: PropTypes.string;
  clearable: PropTypes.bool;
  disabled: PropTypes.bool;
  autoFocus: PropTypes.bool;
  value: PropTypes.string;
  valueFormat: PropTypes.string;
  onChange: PropTypes.func;
  views: Array<string>;
  renderInput: PropTypes.node;
};

export default BasePropTypes;
