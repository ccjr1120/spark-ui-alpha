import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import { isNaN } from 'lodash';
import useClockCalc from './useClockCalc';

// 获取指针旋转角度
const getRotateAngel = (view, value) =>
  view === 'hour' ? value * 30 : value * 6;
// 获取当前是第几个子节点
const getNthChildNumber = (view, value) =>
  isNaN(value) ? -1 : view === 'hour' ? value + 1 : value / 5;
// 获取指针指向位置的中心点颜色
const getInnerPointColor = (view, value) =>
  view !== 'hour' && value % 5 !== 0 ? 'white' : 'blue';
function Clock({ type, value, children, onChange }) {
  const getColor = useColor();
  const { clockWidth, clockHourWidth, getHours, getMinutes, innerScale } =
    useClockCalc();
  const setTime = (event, state) => {
    const { offsetX, offsetY } = event;
    const newSelectedValue =
      type === 'hour'
        ? getHours(offsetX, offsetY, false)
        : getMinutes(offsetX, offsetY);
    onChange(newSelectedValue, state);
  };
  const handleMouseMove = (event) => {
    // event.buttons > 0 = 有鼠标按钮被按下
    if (event.buttons > 0) {
      setTime(event.nativeEvent, 'shallow');
    }
  };
  const handleMouseUp = (event) => {
    setTime(event.nativeEvent, 'finish');
  };
  const isInner = type === 'hour' && (value === 0 || value > 12);
  return (
    <div
      css={css`
        pointer-events: none;
        user-select: none;
        position: relative;
        width: ${clockWidth}px;
        height: ${clockWidth}px;
        border-radius: 50%;
        background: ${getColor('gray-1')};
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: ${10 / FONT_BASE}rem;
          height: ${10 / FONT_BASE}rem;
          background: ${getColor('blue')};
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      `}
    >
      <div
        label="clock-square-mask"
        css={css`
          cursor: pointer;
          position: absolute;
          pointer-events: auto;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          &:active {
            cursor: move;
          }
        `}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div
        label="pointer"
        css={css`
          opacity: ${!isNaN(value) ? 1 : 0};
          position: absolute;
          left: calc(50% - 1px);
          bottom: 50%;
          width: 2px;
          height: ${((clockWidth - clockHourWidth - 2) / 2) *
          (isInner ? innerScale : 1)}px;
          background: ${getColor('blue')};
          transform: rotateZ(${getRotateAngel(type, value)}deg);
          transform-origin: center bottom;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: ${-clockHourWidth / 2}px;
            left: calc(50% - ${clockHourWidth / 2}px);
            border-radius: 50%;
            border: ${clockHourWidth / 2 - 2}px solid ${getColor('blue')};
            width: 4px;
            height: 4px;
            box-sizing: content-box;
            background: ${getColor(getInnerPointColor(type, value))};
          `}
        />
      </div>
      <div
        css={css`
          width: 100%;
          > span:nth-of-type(${getNthChildNumber(type, value)}) {
            color: ${getColor('white')};
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

Clock.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default Clock;
