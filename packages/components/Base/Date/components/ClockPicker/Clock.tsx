import { isNaN } from 'lodash';
import { useNamespace } from '@spark-ui/hooks';
import useClockCalc from './useClockCalc';
import { ClockProps } from './interface';
import React, { Children, cloneElement } from 'react';

// 获取指针旋转角度
const getRotateAngel = (view, value) =>
  view === 'hour' ? value * 30 : value * 6;
// 获取当前是第几个子节点
const getNthChildNumber = (view, value) => {
  if (isNaN(value)) {
    return -1;
  }
  return view === 'hour' ? value + 1 : value / 5;
};
// 获取指针指向位置的中心点颜色
const getInnerPointColor = (view, value) =>
  view !== 'hour' && value % 5 !== 0 ? 'white' : 'var(--spark-clock-pointer-color)';

function Clock(props: ClockProps) {
  const { type, value, children, onChange } = props;
  const ns = useNamespace('clock');
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
      className={ns.m('wrap')}
      style={{ width: `${clockWidth}px`, height: `${clockWidth}px` }}
    >
      <div
        aria-label="clock-square-mask"
        className={ns.e('quare-mask')}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div
        aria-label="pointer"
        className={ns.e('pointer')}
        style={{
          opacity: !isNaN(value) ? 1 : 0,
          height: `${((clockWidth - clockHourWidth - 2) / 2) * (isInner ? innerScale : 1)
            }px`,
          transform: `rotateZ(${getRotateAngel(type, value)}deg)`,
        }}
      >
        <div
          className={ns.e('pointer-center')}
          style={{
            top: `${-clockHourWidth / 2}px`,
            left: `calc(50% - ${clockHourWidth / 2}px)`,
            border: `${clockHourWidth / 2 - 2}px solid var(--spark-clock-pointer-color)`,
            background: getInnerPointColor(type, value),
          }}
        />
      </div>
      <div
        // css={css`
        //   width: 100%;
        //   > span:nth-of-type(${getNthChildNumber(type, value)}) {
        //     color: ${getColor('white')};
        //   }
        // `}
        style={{ width: '100%' }}
      >
        {Children.toArray(children).map((item, i) => cloneElement(item, 1))}
      </div>
    </div>
  );
}

export default Clock;
