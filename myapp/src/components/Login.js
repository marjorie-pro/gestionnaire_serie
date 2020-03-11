import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertHeading } from 'react-bootstrap/Alert';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          pictures: [],
          login: "",
          password: "",
          token: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

      }

    componentDidMount() { 

    //     var md5 = require('md5');
 
    //     console.log(md5('marjorie'));
    
    //     fetch('https://api.betaseries.com/members/auth?key=f10eeafae2e6&login={login}&password={password}',{
    //       method:'get'
          
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             items: data.shows
    //         })
            
    //     });
    }

    handleChangeLogin(event) {
        event.preventDefault();
        this.setState({
            login: event.target.value
        });
    }
    handleChangePassword(event) {
        
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var md5 = require('md5');

        var myPassword = md5(this.state.password)

        console.log(myPassword);

        fetch('https://api.betaseries.com/members/auth?key=f10eeafae2e6&login=' +this.state.login+'&password=' + myPassword,{
            method:'post'
            
          })
          .then(response => response.json())
          .then(data => {
              this.setState({
                  token: data.token
              })
              console.log(this.state.token);
          });
      }

    render() {
        return (
            <div>
                <div>
                <h2>Login</h2>

                    <form onSubmit={this.handleSubmit}>
                    <label for="login">Login</label><br></br>
                    <input type="text" id="login" value={this.state.login} onChange={this.handleChangeLogin}></input><br></br>
                    <label for="password">password</label><br></br>
                    <input type="text" id="password" value={this.state.password} onChange={this.handleChangePassword}></input><br></br><br></br>
                    <input type="submit"></input>
                    </form> 

                </div>
            </div>
        );
    }
}

export default Login;