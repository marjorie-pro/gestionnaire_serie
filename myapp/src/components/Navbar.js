import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Series from './Series'
import Friends from './Friends'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      token: null,
      id: null
    }
    this.callbackFunctionToken = this.callbackFunctionToken.bind(this);
    this.callbackFunctionId = this.callbackFunctionId.bind(this);

  }

  callbackFunctionToken = (childData) => {
    this.setState({
      token: childData,
      isLoggedIn: childData
    })
  }

  callbackFunctionId = (childData) => {
    this.setState({
      id: childData,
      isLoggedIn: childData
    })
  }

  emptyToken = () => {
    this.setState({
      data: null,
      isLoggedIn: null
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">

                  {isLoggedIn ? <input type="button" onClick={this.emptyToken} value="Se déconnecter" ></input> :
                    <Link to="/login" className="nav-link">Se connecter<span className="sr-only">(current)</span></Link>
                  }

                </li>
                <li className="nav-item">
                  <Link to="/series" className="nav-link">Séries</Link>
                </li>
                <li className="nav-item">
                  <Link to="/amis" className="nav-link">Amis</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/login">
              {isLoggedIn ?
                <Redirect to='/series' /> :
                <Login parentCallBackToken={this.callbackFunctionToken} parentCallBackId={this.callbackFunctionId} />
              }
            </Route>

            <Route path="/series">
              {isLoggedIn ?
                <Series /> :
                <Redirect to='/login' />
              }
            </Route>

            <Route path="/amis">
              {isLoggedIn ?
                <Friends token={this.state.token} myId={this.state.id} /> :
                <Redirect to='/login' />
              }
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}
export default Navbar;

function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
}
