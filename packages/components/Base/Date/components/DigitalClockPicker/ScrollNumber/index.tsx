import { useNamespace } from '@spark-ui/hooks';
import { times } from 'lodash';
import { useRef, useState } from 'react';
import { ScrollNumberProps } from './interface';
import NumberItem from './NumberItem';
import './index.less';

function ScrollNumber(props: ScrollNumberProps) {
  const { start = 0, end = 23 } = props;
  const ns = useNamespace('scroll-number');

  const containerHeight = 256;
  const itemHeight = 40;
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
    <div className={ns.m('wrapper')}>
      <div
        ref={scrollContainerRef}
        className={ns.e('content')}
        onScroll={handleScroll}
      >
        <div style={{ height: `${scrollHeight}px` }} />
      </div>
      <div className={ns.m('list--wrapper')}>
        <ul
          className={ns.m('list')}
          // css={css`
          //   width: 100%;
          //   position: absolute;
          //   top: ${-offsetTop}px;
          //   &::before,
          //   &::after {
          //     content: '';
          //     display: block;
          //     height: ${sideSpaceHeight}px;
          //   }
          // `}
          style={{ top: `${-offsetTop}px` }}
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

export default ScrollNumber;
