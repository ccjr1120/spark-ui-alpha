import ScrollNumber from './ScrollNumber';
import { DigitalClockProps } from './interface';

function DigitalClock(props: DigitalClockProps) {
  return (
    <>
      <ScrollNumber end={23} />
      <ScrollNumber end={59} />
      <ScrollNumber end={59} />
    </>
  );
}

export default DigitalClock;
