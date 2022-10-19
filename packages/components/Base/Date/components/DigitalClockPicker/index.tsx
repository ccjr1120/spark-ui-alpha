import { useNamespace } from '@spark-ui/hooks';
import DigitalClock from './DigitalClock';
import { DigitalClockPickerProps } from './interface';
import './index.less';

function DigitalClockPicker(props: DigitalClockPickerProps) {
  const ns = useNamespace('digital-clock-picker');
  return (
    <div className={ns.b()}>
      <DigitalClock />
    </div>
  );
}

export default DigitalClockPicker;
