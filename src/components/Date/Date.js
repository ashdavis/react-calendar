import React from 'react';
import './Date.css';

const Date = ({ date, overflow }) => (
  <div className={overflow ? 'day day--overflow' : 'day'}>
    {date}
  </div>
);

export default Date;
