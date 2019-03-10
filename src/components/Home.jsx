import React, { Component } from 'react';
import userSVG from '../images/user-solid.svg';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <div className="app-home__profile-pic">
          <span className="profile-pic">
            <img src={userSVG} alt="User Profile SVG" style={{ height: 30 }} />
          </span>
        </div>
        <div className="app-home__heading">
          <h1>Jane Doe</h1>

        </div>
      </div>
    )
  }
}

export default Home
