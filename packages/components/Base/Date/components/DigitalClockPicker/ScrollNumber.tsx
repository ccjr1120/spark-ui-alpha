import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import { times } from 'lodash';
import { css } from '@emotion/react';
import useFontSize from 'hooks/useFontSize';
import { useRef, useState } from 'react';

function NumberItem({ height, active, children }) {
  const getColor = useColor();
  return (
    <li
      css={css`
        width: 100%;
        text-align: center;
        height: ${height}px;
        line-height: ${height}px;
        color: ${getColor(active ? 'gray-black-3' : 'gray-black-9')};
        ${active && 'font-weight: 700;'}
      `}
    >
      {children}
    </li>
  );
}
function ScrollNumber({ start = 0, end = 23 }) {
  const fontSize = useFontSize();
  const containerHeight = (256 / FONT_BASE) * fontSize;
  const itemHeight = (40 / FONT_BASE) * fontSize;
  const sideSpaceHeight = (containerHeight - itemHeight) / 2;
  const numbers = times(end - start + 1, (i) => ({
    number: start + i,
    label: start + i < 10 ? `0${start + i}` : start + i,
  }));
  const scrollHeight = itemHeight * numbers.length;
  const scrollContainerRef = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [activeNumber, setActiveNumber] = useState(0);
  const handleScroll = (e) => {
    // 根据滚动距离计算当前居中的数字
    const { scrollTop } = e.target;
    const number = Math.round(scrollTop / itemHeight);
    setActiveNumber(() => number);
    setOffsetTop(() => number * itemHeight);
  };
  return (
    <div
      css={css`
        position: relative;
        width: ${52 / FONT_BASE}rem;
        height: ${containerHeight}px;
        &::before {
          pointer-events: none;
          position: absolute;
          top: calc(50% - ${itemHeight / 2}px);
          content: '';
          display: block;
          width: 100%;
          height: ${itemHeight}px;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
        }
      `}
    >
      <div
        ref={scrollContainerRef}
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          &:hover {
            overflow-y: overlay;
          }
          &::before,
          &::after {
            content: '';
            display: block;
            height: ${sideSpaceHeight}px;
          }
        `}
        onScroll={handleScroll}
      >
        <div
          css={css`
            pointer-events: none;
            height: ${scrollHeight}px;
          `}
        />
      </div>
      <div
        css={css`
          pointer-events: none;
          position: absolute;
          top: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        `}
      >
        <ul
          css={css`
            width: 100%;
            position: absolute;
            top: ${-offsetTop}px;
            &::before,
            &::after {
              content: '';
              display: block;
              height: ${sideSpaceHeight}px;
            }
          `}
        >
          {numbers.map((item) => (
            <NumberItem
              key={item.label}
              height={itemHeight}
              active={item.number === activeNumber}
            >
              {item.label}
            </NumberItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

NumberItem.propTypes = {
  height: PropTypes.number,
  children: PropTypes.node,
  active: PropTypes.bool,
};

ScrollNumber.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
};

export default ScrollNumber;
