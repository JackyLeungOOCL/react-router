import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import About from "./components/About"
import Users from "./components/Users"
import NotFound from "./components/NotFound"

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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

<hr></hr>
          <Switch>
            <Route path="/" exact component={() => <h1>HOME</h1>} />
            <Route path="/about" component={About} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:userid" component={
              ({match}) => {
                return <h1>hi user {match.params.userid}</h1>
              }
            } />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
