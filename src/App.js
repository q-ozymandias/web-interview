import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppointmentsOverview from './components/AppointmentsOverview'
import Booking from './components/Booking';
import Header from './components/Header'
import Home from './components/Home'
import request from './api/request';


import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
    this.setUpUser = this.setUpUser.bind(this);
  }

  async componentDidMount() {
    const userData = await request('users/1', 'GET');
    this.setUpUser(userData);
  }

  setUpUser(userData) {
    console.log(userData);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/appointments" exact component={AppointmentsOverview} />
          <Route path="/booking" exact component={Booking} />
        </div>
      </Router >
    )
  }
}

export default App
