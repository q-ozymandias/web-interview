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
      userName: '',
      userInitials: '',
      userAvatar: '',
      userId: null,
    };
    this.setUpUser = this.setUpUser.bind(this);
  }

  async componentDidMount() {
    const userData = await request('users/1', 'GET');
    this.setUpUser(userData);
  }

  setUpUser(userData) {
    const { firstName, lastName } = userData;
    const userName = [firstName, lastName].join(' ');
    const userInitials = [firstName, lastName].map((p) => {
      if (p) return p[0];
      return undefined;
    }).join('');
    this.setState({
      userName,
      userInitials,
      userId: userData.id,
      userAvatar: userData.avatar,
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header userInitials={this.state.userInitials} />
          <Route path="/" exact render={
            (props) => <Home {...props} userName={this.state.userName} userAvatar={this.state.userAvatar} />
          }
          />
          <Route path="/booking" exact render={
            (props) => <Booking {...props} userName={this.state.userName} userId={this.state.userId} userAvatar={this.state.userAvatar} />
          }
          />
          <Route path="/appointments" exact render={
            (props) => <AppointmentsOverview {...props} userName={this.state.userName} />
          }
          />
        </div>
      </Router >
    )
  }
}

export default App
