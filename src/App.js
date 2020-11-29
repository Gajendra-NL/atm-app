import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Withdraw from './pages/withdraw/Withdraw';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Route exact path="/login" component={Login} />  
        <Switch>
          <ProtectedRoute exact path="/withdraw" component={Withdraw} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
