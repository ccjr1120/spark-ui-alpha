import { ReactNode } from 'react';
import PropTypes from 'prop-types';

type DialogProps = {
  open: boolean;
  title: ReactNode;
  children: ReactNode;
  showCloseBtn?: boolean;
  showFooter?: boolean;
  showCancelBtn?: boolean;
  showConfirmBtn?: boolean;
  onClose?: Function;
  onCancel?: Function;
  onConfirm?: Function;
};

export default DialogProps;
