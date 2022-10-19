const CLOCK_WIDTH = 220;
const CLOCK_HOUR_WIDTH = 36;
const rad2deg = (rad) => rad * (180 / Math.PI);

const useCalcClock = () => {
  const clockWidth = CLOCK_WIDTH;
  const clockHourWidth = CLOCK_HOUR_WIDTH;
  const innerScale = 0.65;
  const clockCenter = {
    x: clockWidth / 2,
    y: clockWidth / 2,
  };
  // 12点钟方向
  const baseClockPoint = {
    x: clockCenter.x,
    y: 0,
  };
  const cx = baseClockPoint.x - clockCenter.x;
  const cy = baseClockPoint.y - clockCenter.y;
  const getAngleValue = (step, offsetX, offsetY) => {
    const x = offsetX - clockCenter.x;
    const y = offsetY - clockCenter.y;
    const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
    let deg = rad2deg(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;
    const value = Math.floor(deg / step) || 0;
    const delta = x ** 2 + y ** 2;
    const distance = Math.sqrt(delta);
    return { value, distance };
  };

  const getMinutes = (offsetX, offsetY, step = 1) => {
    const angleStep = step * 6;
    let { value } = getAngleValue(angleStep, offsetX, offsetY);
    value = (value * step) % 60;
    return value;
  };

  const getHours = (offsetX, offsetY, ampm = false) => {
    const { value, distance } = getAngleValue(30, offsetX, offsetY);
    let hour = value || 12;

    if (!ampm) {
      if (distance < clockWidth / 2 - clockHourWidth) {
        hour += 12;
        hour %= 24;
      }
    } else {
      hour %= 12;
    }

    return hour;
  };

  return {
    clockWidth,
    clockHourWidth,
    getHours,
    getMinutes,
    innerScale,
  };
};

export default useCalcClock;
