import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './SelectYear.css';

class SelectYear extends Component {
  constructor() {
    super();
    this.state = {
      range: [],
    }
    this.createDateRange = this.createDateRange.bind(this);
  }

  componentWillMount() {
    const {minYear, maxYear} = this.props;
    this.createDateRange(
      moment(minYear, 'YYYY'),
      moment(maxYear, 'YYYY').add(1, 'years')
    );
  }

  createDateRange(year, end, range = []) {
    if (year.isSame(end, 'year')) { // base of recursion
      return this.setState({range});
    } else { // recursive step
      range.push(year.format('YYYY'))
      this.createDateRange(year.clone().add(1, 'years'), end, range);
    }
  }

  render() {
    const {range} = this.state;
    const {year, handleChange} = this.props;
    return (
      <select className="select-year" name="year" value={year} onChange={handleChange}>
        {range.map(year => {
          return <option key={year} value={year}>{year}</option>
        })}
      </select>
    );
  }
}

SelectYear.propTypes = {
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired,
};

export default SelectYear;
