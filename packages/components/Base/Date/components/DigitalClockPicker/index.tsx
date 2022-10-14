import PropTypes from 'prop-types';
import useViews from '../../hooks/useViews';
import DigitalClock from './DigitalClock';

function DigitalClockPicker({
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
      <DigitalClock />
    </div>
  );
}

DigitalClockPicker.propTypes = {
  view: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  onViewChange: PropTypes.func,
};

export default DigitalClockPicker;
