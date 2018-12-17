import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { Main, Roster, Render, History } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ Main }/>
        <Route path="/roster" component={ Roster }/>
        <Route path="/render" component={ Render }/>
        <Route path="/history" component={ History }/>
      </Router>
    );
  }
}

export default App;
