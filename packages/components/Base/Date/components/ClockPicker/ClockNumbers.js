import ClockNumber from './ClockNumber';

export const getMinuteNumbers = () => {
  const minuteNumbers = [];
  const first = 1;
  const end = 12;
  for (let step = first; step <= end; step += 1) {
    minuteNumbers.push(
      <ClockNumber
        key={step}
        index={step}
        label={
          step === 12
            ? '00'
            : `${step * 5}`.length === 1
            ? `0${step * 5}`
            : `${step * 5}`
        }
      />
    );
  }
  return minuteNumbers;
};

export const getHourNumbers = () => {
  const hourNumbers = [];
  const startHour = 0;
  const endHour = 23;
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = '00';
    }
    hourNumbers.push(
      <ClockNumber
        key={hour}
        index={hour}
        label={label}
        inner={hour === 0 || hour > 12}
      />
    );
  }
  return hourNumbers;
};
