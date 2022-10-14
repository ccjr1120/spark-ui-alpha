import PropTypes from 'prop-types';
import { times } from 'lodash';
import { css } from '@emotion/react';
import { useLayoutEffect, useMemo, useRef } from 'react';
import useFontSize from 'hooks/useFontSize';
import PickersItem from '../PickersItem';

const startYear = 1900;
const endYear = 2077;
const cellHeight = 56 / FONT_BASE;
const cloumnNum = 4;
function YearPicker({ date, onChange, renderYear, ...others }) {
  const year = date.year();
  const fontSize = useFontSize();
  const containerRef = useRef();
  // 根据curYear计算ContainerRef的滚动高度
  useLayoutEffect(() => {
    // 减二是为了让它的显示位置稍靠中间
    const rowNum = Math.floor((year - startYear) / cloumnNum) - 2;
    const offsetTop = rowNum * cellHeight * fontSize + (rowNum - 1) * 4;
    containerRef.current.scrollTop = offsetTop;
  }, [year, fontSize]);
  const yearList = useMemo(
    () =>
      times(endYear - startYear, (i) => ({
        key: `${year}-${i + 1}`,
        date: date.year(startYear + i),
        label: startYear + i,
        isActive: year === startYear + i,
      })),
    [date, year]
  );
  return (
    <div
      css={css`
        height: ${248 / FONT_BASE}rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      `}
    >
      <div
        ref={containerRef}
        css={css`
          height: 0;
          flex-grow: 1;
          display: grid;
          grid-row-gap: 4px;
          grid-template-columns: repeat(${cloumnNum}, 1fr);
          padding: 0 ${16 / FONT_BASE}rem;
          overflow: auto;
        `}
        {...others}
      >
        {renderYear
          ? yearList.map((item) => renderYear(item))
          : yearList.map((item) => (
              <PickersItem
                height={56}
                borderRadius="1.5rem"
                {...item}
                onClick={() => onChange(item.date)}
              />
            ))}
      </div>
    </div>
  );
}

YearPicker.propTypes = {
  date: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  renderYear: PropTypes.func,
};

export default YearPicker;
