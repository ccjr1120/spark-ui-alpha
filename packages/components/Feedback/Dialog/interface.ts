import { ReactNode } from 'react';
import PropTypes from 'prop-types';

type DialogProps = {
  open: PropTypes.bool;
  title: ReactNode;
  children: ReactNode;
  showCloseBtn?: PropTypes.bool;
  showFooter?: PropTypes.bool;
  showCancelBtn?: PropTypes.bool;
  showConfirmBtn?: PropTypes.bool;
  onClose?: PropTypes.func;
  onCancel?: PropTypes.func;
  onConfirm?: PropTypes.func;
};

export default DialogProps;
