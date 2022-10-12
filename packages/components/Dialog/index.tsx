import { useNamespace } from '@spark-ui/hooks';
import { createPortal } from 'react-dom';
import DialogProps from './interface';
import './index.less';
import Button from '../Button';

function Dialog(props: DialogProps) {
  const {
    open,
    title,
    children,
    onClose,
    onCancel,
    onConfirm,
    showCloseBtn = true,
    showCancelBtn = true,
    showConfirmBtn = true,
    showFooter = true,
  } = props;
  const ns = useNamespace('dialog');

  return (
    <>
      {open &&
        createPortal(
          <div className={`${ns.b()} ${ns.m('root')}`}>
            <div className={ns.m('wrap')}>
              <header className={ns.e('header')}>{title}</header>
              <main className={ns.e('content')}>{children}</main>
              {showFooter && (
                <footer className={ns.e('footer')}>
                  <span className="dialog-footer">
                    {showCancelBtn && (
                      <Button
                        onClick={onCancel}
                        type="plain"
                        style={{ marginRight: '10px' }}
                      >
                        Cancel
                      </Button>
                    )}
                    {showConfirmBtn && (
                      <Button
                        onClick={onConfirm}
                        style={{ marginLeft: '10px' }}
                      >
                        Confirm
                      </Button>
                    )}
                  </span>
                </footer>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Dialog;
