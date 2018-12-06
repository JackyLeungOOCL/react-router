import React, { Component } from 'react'

export default class NotFound extends Component {
  goBackPage = () => {
    const {history} = this.props;
    history.goBack();
  }

  goForwardPage = () => {
    const {history} = this.props
    history.goForward();
  }

  render() {
    return (
      <div>
        <header><h1>404 Page Not Found</h1></header>
        <body>
          <button onClick={this.goBackPage}>Back</button>
          <button onClick={this.goForwardPage}>Forward</button>
        </body>
      </div>
    )
  }
}
