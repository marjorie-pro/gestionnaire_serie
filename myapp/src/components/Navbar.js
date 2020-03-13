import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import Login from './Login';
<<<<<<< HEAD

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> e374e14c006f33f40e568403f9a3f4577f6e265f

import Series from './Series'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      token: null
    }
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  callbackFunction = (childData) => {
    this.setState({
      token: childData,
      isLoggedIn: childData
    })
  }

  emptyToken = () => {
    this.setState({
      token: null,
      isLoggedIn: null
    })
  }

    render(){
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
                        <Redirect to='/series'/> : 
                        <Login parentCallBack = {this.callbackFunction}/>
                       }
                        
                    </Route>
                    <Route path="/series">
                    {isLoggedIn ?
                        <Series /> : 
                        <Redirect to='/login'/>
                       }
                        
                    </Route>
                    <Route path="/amis">
                    {isLoggedIn ?
                        <Amis />: 
                        <Redirect to='/login'/>
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


  function Amis() {
    return (
      <div>
        <h2>Amis</h2>
      </div>
    );
  }
