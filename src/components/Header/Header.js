import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import Arrow from '../Arrow/Arrow';
import SelectMonth from '../SelectMonth/SelectMonth';
import SelectYear from '../SelectYear/SelectYear';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      month: '',
      year: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      month: nextProps.date.clone().month(),
      year: nextProps.date.clone().year(),
    })
  }

  handleChange(e) {
    const {updateDate} = this.props;
    const {month, year} = this.state;
    if (e.target.name === 'month') {
      this.setState({month: e.target.value});
      updateDate(e.target.value, year); 
    } else if (e.target.name === 'year') {
      this.setState({year: e.target.value});
      updateDate(month, e.target.value); 
    }   
  }

  render() {
    const {month, year} = this.state;
    const {nextMonth, previousMonth, minYear, maxYear} = this.props;
    return(
      <div className="header">
        <Arrow
          direction="left"
          nextMonth={nextMonth}
          previousMonth={previousMonth}
        />
        <div>
          <SelectMonth month={month} handleChange={this.handleChange} />
          <SelectYear
            year={year}
            handleChange={this.handleChange}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
        <Arrow
          direction="right"
          nextMonth={nextMonth}
          previousMonth={previousMonth}
        />
      </div>
    );
  }
}

Header.propTypes = {
  date: PropTypes.object.isRequired,
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired,
  updateDate: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
};

export default Header;
