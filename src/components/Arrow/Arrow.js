import React from 'react';
import PropTypes from 'prop-types';
import leftChevron from './left-chevron.png';
import rightChevron from './right-chevron.png';
import './Arrow.css';

const Arrow = ({direction, nextMonth, previousMonth}) => {
  if (direction === 'left') {
    return (
      <img
        src={leftChevron}
        alt="Left Chevron"
        className="arrow"
        onClick={previousMonth}
      />
    );
  } else if (direction === 'right') {
    return (
      <img
        src={rightChevron}
        alt="Right Chevron"
        className="arrow"
        onClick={nextMonth}
      />
    );
  }
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
};

export default Arrow;
