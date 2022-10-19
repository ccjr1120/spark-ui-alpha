import { useNamespace } from '@spark-ui/hooks';
import { ClockNumberProps } from './interface';
import useClockCalc from './useClockCalc';

function ClockNumber(props: ClockNumberProps) {
  const { index, inner, label } = props;
  const ns = useNamespace('clock-number');
  const { clockWidth, clockHourWidth, innerScale } = useClockCalc();
  const angle = ((index % 12) / 12) * Math.PI * 2 - Math.PI / 2;
  const length =
    ((clockWidth - clockHourWidth - 2) / 2) * (inner ? innerScale : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (
    <span
      className={`${ns.b()} ${ns.useIs('inner', inner)}`}
      style={{
        left: `calc((100% - ${clockHourWidth}px) / 2)`,
        width: `${clockHourWidth}px`,
        height: `${clockHourWidth}px`,
        transform: `translate(
          ${x}px,
          ${y + (clockWidth - clockHourWidth) / 2}px
        )`,
      }}
    >
      {label}
    </span>
  );
}

export default ClockNumber;
