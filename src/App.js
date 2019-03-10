import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppointmentsOverview from './components/AppointmentsOverview'
import Booking from './components/Booking';
import Header from './components/Header'
import Home from './components/Home'

import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(response => response.body)
      .then(body => {
        const reader = body.getReader();
        console.log(reader);
      })
      .then(res => {
        res.json();
        console.log(res.body);
      })
      .then(() => {
        // TODO: Handle response here
      })
      .catch(() => {
        // TODO: Handle error here
      })
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
