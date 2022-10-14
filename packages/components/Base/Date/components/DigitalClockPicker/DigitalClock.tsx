import { Fragment } from 'react';
import PropTypes from 'prop-types';
import useColor from 'hooks/useColor';
import useFontSize from 'hooks/useFontSize';
import ScrollNumber from './ScrollNumber';

function DigitalClock({ date }) {
  const fontSize = useFontSize();
  const getColor = useColor();
  return (
    <>
      <ScrollNumber end={23} />
      <ScrollNumber end={59} />
      <ScrollNumber end={59} />
    </>
  );
}

DigitalClock.propTypes = {
  date: PropTypes.objectOf(PropTypes.any),
};

export default DigitalClock;
