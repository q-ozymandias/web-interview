import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
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
        </div>
      </Router >
    )
  }
}

export default App
