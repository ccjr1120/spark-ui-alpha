import { useNamespace } from '@spark-ui/hooks';
import {
  MutableRefObject,
  useState,
  forwardRef,
  useEffect,
  useLayoutEffect,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

interface PickersPopperProps {
  anchorEl: MutableRefObject<any>;
  pickerEl: MutableRefObject<any>;
  children: ReactNode;
  open: boolean;
  onClose: (this: HTMLElement, ev: MouseEvent) => void;
}

const PickersPopper = forwardRef(
  (props: PickersPopperProps, ref: React.LegacyRef<HTMLDivElement>) => {
    const { anchorEl, pickerEl, children, open, onClose, ...others } = props;
    const ns = useNamespace('pickers-popper');
    const [position, setPosition] = useState({
      left: 0,
      top: 0,
      height: 0,
    });
    const [direction, setDirection] = useState('bottom');
    useEffect(() => {
      if (pickerEl.current && anchorEl.current) {
        // 判断anchorEl下方的空间是否足够放置pickerEl
        const { top: anchorTop, height: anchorHeight } =
          anchorEl.current.getBoundingClientRect();
        const { height: pickerHeight } =
          pickerEl.current.getBoundingClientRect();
        const { clientHeight: bodyHeight } = document.body;
        if (bodyHeight - anchorTop - anchorHeight < pickerHeight) {
          setDirection('top');
        }
      }
    }, [anchorEl, pickerEl]);
    useLayoutEffect(() => {
      let animationFrameID = null;
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        animationFrameID = window.requestAnimationFrame(() => {
          const { left, top } = anchorEl.current.getBoundingClientRect();
          if (children && open) {
            setPosition({ left: left + width / 2, top: top + height, height });
          }
        });
      });
      observer.observe(anchorEl.current);
      return () => {
        observer.disconnect();
        window.cancelAnimationFrame(animationFrameID);
      };
    });
    useLayoutEffect(() => {
      document.body.addEventListener('click', onClose);
      return () => {
        document.body.removeEventListener('click', onClose);
      };
    }, [onClose]);
    if (!children) {
      return null;
    }
    return createPortal(
      <div
        ref={ref}
        className={ns.b()}
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
        }}
        {...others}
      >
        {children}
      </div>,
      document.body
    );
  }
);

PickersPopper.displayName = 'PickersPopper';

export default PickersPopper;
