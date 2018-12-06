import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/first">First</Link>
              </li>
              <li>
                <Link to="/second">Second</Link>
              </li>
            </ul>
          </nav>

<hr></hr>
          <Switch>
            <Route path="/" exact component={() => <h1>HOME</h1>} />
            <Route path="/first" exact component={() => <h1>FIRST</h1>} />
            <Route path="/second" exact component={() => <h1>SECOND</h1>} />
            <Route exact component={() => <h1>404 page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
