import React, { Component } from 'react'
import Header from './components/Header'

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
      <div className="app">
        <Header />
        <h1>This is where your code goes!</h1>
      </div>
    )
  }
}

export default App
