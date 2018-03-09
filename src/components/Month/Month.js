import React from 'react';
import PropTypes from 'prop-types';

import './Month.css';
import Date from '../Date/Date';

const Month = ({days}) => {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="month">
      {weekdays.map(day => {
        return <p key={day} className="month__weekday">{day}</p>;
      })}
      {days.map(day => {
        return (
          <Date
            key={`${day.day}-${day.month}`}
            date={day.day}
            overflow={day.overflow}
          />
        );
      })}
    </div>
  );
}

Month.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    overflow: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Month;
