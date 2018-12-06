import React, { Component } from 'react'

export default class Users extends Component {
  goBackPage = () => {
    const {history} = this.props;
    history.goBack(-1);
  }

  goForwardPage = () => {
    const {history} = this.props
    history.goForward();
  }
  
  render() {
    return (
      <div>
        <header><h1>Users</h1></header>
        <body>
          Here is the list of users...
          <button onClick={this.goBackPage}>Back</button>
          <button onClick={this.goForwardPage}>Forward</button>
        </body>
      </div>
    )
  }
}
