import { memo } from 'react';
import PropTypes from 'prop-types';
import { useNamespace } from '@spark-ui/hooks';
import { useFormControl } from './FormControlContext';

function FormHelperText(props) {
  const ns = useNamespace('form-helper-text');
  const { isError } = useFormControl();
  return <p className={ns.b()} {...props} />;
}

export default FormHelperText;
