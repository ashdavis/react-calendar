import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Calendar from './components/Calendar/Calendar';

class App extends Component {  
  render() {
    return (
      <Router>
        <Fragment>
          <h1 className="title">React Calendar</h1>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/:date" component={Calendar} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
