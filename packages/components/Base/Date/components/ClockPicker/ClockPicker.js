import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Clock from './Clock';
import PickersArrowSwitcher from '../PickersArrowSwitcher';
import useViews from '../../hooks/useViews';
import { getHourNumbers, getMinuteNumbers } from './ClockNumbers';

function ClockPicker({
  date,
  view,
  views = ['hour', 'minute'],
  onChange,
  onViewChange,
}) {
  const {
    openView,
    setOpenView,
    previousView,
    nextView,
    handleChangeAndOpenNext,
  } = useViews({
    view,
    views,
    onChange,
    onViewChange,
  });
  const viewProps = useMemo(() => {
    switch (openView) {
      case 'hour': {
        const handleHourChange = (value, isFinish) => {
          handleChangeAndOpenNext(date.hour(value), isFinish);
        };
        return {
          onChange: handleHourChange,
          value: date.hour(),
          children: getHourNumbers(),
        };
      }
      case 'minute': {
        const handleMinuteChange = (value, isFinish) => {
          handleChangeAndOpenNext(date.minute(value), isFinish);
        };
        return {
          onChange: handleMinuteChange,
          value: date.minute(),
          children: getMinuteNumbers(),
        };
      }
      default:
        throw new Error('not supported view');
    }
  }, [openView, date, handleChangeAndOpenNext]);
  return (
    <div
      css={css`
        position: relative;
        padding: ${16 / FONT_BASE}rem;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: ${16 / FONT_BASE}rem;
          font-weight: bold;
          left: ${16 / FONT_BASE}rem;
        `}
      >
        {{ hour: '小时', minute: '分钟', second: '秒' }[openView]}
      </div>
      <PickersArrowSwitcher
        css={css`
          position: absolute;
          top: ${12 / FONT_BASE}rem;
          right: ${12 / FONT_BASE}rem;
        `}
        isLeftDisabled={!previousView}
        isRightDisabled={!nextView}
        onLeftClick={() => setOpenView(previousView)}
        onRightClick={() => setOpenView(nextView)}
      />
      <Clock type={openView} {...viewProps} />
    </div>
  );
}

ClockPicker.propTypes = {
  view: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  onViewChange: PropTypes.func,
};

export default ClockPicker;
