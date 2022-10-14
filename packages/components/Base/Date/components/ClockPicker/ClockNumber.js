import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import useClockCalc from './useClockCalc';

function ClockNumber({ index, inner, label }) {
  const getColor = useColor();
  const { clockWidth, clockHourWidth, innerScale } = useClockCalc();
  const angle = ((index % 12) / 12) * Math.PI * 2 - Math.PI / 2;
  const length =
    ((clockWidth - clockHourWidth - 2) / 2) * (inner ? innerScale : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (
    <span
      css={css`
        position: absolute;
        left: calc((100% - ${clockHourWidth}px) / 2);
        width: ${clockHourWidth}px;
        height: ${clockHourWidth}px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${20 / FONT_BASE}rem;
        transform: translate(
          ${x}px,
          ${y + (clockWidth - clockHourWidth) / 2}px
        );
        ${inner && `color:${getColor('gray-black-6')}`}
      `}
    >
      {label}
    </span>
  );
}

export default ClockNumber;

ClockNumber.propTypes = {
  index: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inner: PropTypes.bool,
};
