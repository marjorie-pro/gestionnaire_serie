import React, { Component } from 'react';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navbar extends Component {
    render(){
        return (
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/"><a className="navbar-brand" href="#">Logo</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to="/login"><a className="nav-link" href="#">Se connecter<span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/series"><a className="nav-link" href="#">Séries</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/amis"><a className="nav-link" href="#">Amis</a></Link>
                    </li>
                    </ul>
                </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/series">
                        <Series />
                    </Route>
                    <Route path="/amis">
                        <Amis />
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

  function Series() {
    return (
      <div>
        <h2>Séries</h2>
      </div>
    );
  }

  function Amis() {
    return (
      <div>
        <h2>Amis</h2>
      </div>
    );
  }
