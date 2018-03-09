import React, { Component } from 'react';
import moment from 'moment';

import './Calendar.css';
import Header from '../Header/Header';
import Month from '../Month/Month';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
      days: [],
      minYear: 1950,
      maxYear: 2050,
    };
    this.generateDates = this.generateDates.bind(this);
    this.generateDays = this.generateDays.bind(this);
    this.updateUrlParam = this.updateUrlParam.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    let date;
    const {match, history} = this.props;
    const {minYear, maxYear} = this.state;
    const isDate = moment(match.params.date, 'MM-YYYY').isValid();
    const isWithinRange = (
      moment(match.params.date, 'MM-YYYY').year() >= minYear &&
      moment(match.params.date, 'MM-YYYY').year() <= maxYear
    );

    if (match.params.date && isDate && isWithinRange) {
      date = moment(match.params.date, 'MM-YYYY');
    } else {
      date = moment();
      history.push('/');
    }

    this.generateDates(date);
    this.updateUrlParam(date);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      let date = moment(nextProps.match.params.date, 'MM-YYYY');
      const isValid = date.isValid();
      if (date && isValid) {
        this.generateDates(date);
      }
    }
  }

  generateDates(date) {
    const start = date
      .clone()
      .startOf('month')
      .startOf('isoWeek');

    const end = date
      .clone()
      .endOf('month')
      .endOf('isoWeek')
      .add(1, 'days');

    this.generateDays(start, end, date);
  }

  generateDays(day, end, date, days = []) {
    const month = date.clone().month();
    if (day.isSame(end, 'day')) { // base of recursion
      return this.setState({date, days});
    } else { // recursive step
      days.push({
        day: day.clone().date(),
        month: day.clone().month(),
        overflow: day.clone().month() !== month,
      });
      this.generateDays(day.add(1, 'days'), end, date, days);
    }
  }

  updateUrlParam(date) {
    const {history} = this.props;
    history.push(`/${date.format('MM-YYYY')}`);
  }

  nextMonth() {
    const {date} = this.state;
    const newDate = moment(date).clone().add(1, 'months');
    this.generateDates(newDate);
    this.updateUrlParam(newDate);
  }

  previousMonth() {
    const {date} = this.state;
    const newDate = moment(date).clone().subtract(1, 'months');
    this.generateDates(newDate);
    this.updateUrlParam(newDate);
  }

  updateDate(month, year) {
    month++; // increment month by 1 as months are zero indexed
    const newDate = moment(`${month}-${year}`, 'MM-YYYY');
    this.generateDates(newDate);
    this.updateUrlParam(newDate);
  }

  render() {
    const {date, days, minYear, maxYear} = this.state;
    return (
      <div className="calendar">
        <Header
          date={date}
          minYear={minYear}
          maxYear={maxYear}
          updateDate={this.updateDate}
          nextMonth={this.nextMonth}
          previousMonth={this.previousMonth}
        />
        <Month days={days} />
      </div>
    );
  }
}

export default Calendar;
