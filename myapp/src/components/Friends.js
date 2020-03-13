import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertHeading } from 'react-bootstrap/Alert';

class Friends extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };

      }

    componentDidMount() { 

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
               
            </div>
        );
    }
}

export default Friends;