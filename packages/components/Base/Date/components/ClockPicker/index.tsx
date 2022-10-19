import { useMemo } from 'react';
import { useNamespace } from '@spark-ui/hooks';
import Clock from './Clock';
import PickersArrowSwitcher from '../PickersArrowSwitcher';
import useViews from '../../hooks/useViews';
import { getHourNumbers, getMinuteNumbers } from './ClockNumbers';
import { ClockPickerProps } from './interface';
import './index.less';

function ClockPicker(props: ClockPickerProps) {
  const {
    date,
    view,
    views = ['hour', 'minute'],
    onChange,
    onViewChange,
  } = props;
  const ns = useNamespace('clock-picker');
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
    <div className={ns.b()}>
      <div className={ns.e('label')}>
        {{ hour: '小时', minute: '分钟', second: '秒' }[openView]}
      </div>
      <PickersArrowSwitcher
        className={ns.e('arrow')}
        isLeftDisabled={!previousView}
        isRightDisabled={!nextView}
        onLeftClick={() => setOpenView(previousView)}
        onRightClick={() => setOpenView(nextView)}
      />
      <Clock type={openView} {...viewProps} />
    </div>
  );
}

export default ClockPicker;
