import PropTypes from 'prop-types';
import { times } from 'lodash';
import { css } from '@emotion/react';
import { useMemo } from 'react';
import PickersItem from '../PickersItem';

const chsMonth = ['', '第一季度', '第二季度', '第三季度', '第四季度'];
function QuarterPicker({ date, onChange, renderQuarter, ...others }) {
  const quarterList = useMemo(() => {
    const year = date.year();
    const quarter = date.quarter();
    return times(4, (i) => ({
      key: `${year}-${i + 1}`,
      date: date.quarter(i + 1),
      label: chsMonth[i + 1],
      isActive: i + 1 === quarter,
    }));
  }, [date]);
  return (
    <div
      css={css`
        display: grid;
        grid-row-gap: 4px;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 ${16 / FONT_BASE}rem ${16 / FONT_BASE}rem;
        overflow: auto;
      `}
      {...others}
    >
      {renderQuarter
        ? quarterList.map((item) => renderQuarter(item))
        : quarterList.map((month) => (
            <PickersItem height={48} borderRadius="1.5rem" {...month} />
          ))}
    </div>
  );
}

QuarterPicker.propTypes = {
  date: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func,
  renderQuarter: PropTypes.func,
};

export default QuarterPicker;
