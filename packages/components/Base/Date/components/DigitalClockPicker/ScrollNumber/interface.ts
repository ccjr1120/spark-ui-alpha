import { PropTypes } from 'prop-types';

interface ScrollNumberProps {
  start?: PropTypes.number;
  end: PropTypes.number;
}

interface ScrollNumberItemProps {
  height: PropTypes.number;
  children: PropTypes.node;
  active: PropTypes.bool;
}

export { ScrollNumberProps, ScrollNumberItemProps };
