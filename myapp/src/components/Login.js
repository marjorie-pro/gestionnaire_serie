import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            pictures: [],
            login: "",
            password: "",
            token: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
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

        fetch('https://api.betaseries.com/members/auth?key=f10eeafae2e6&login=' + this.state.login + '&password=' + myPassword, {
            method: 'post'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    token: data.token,
                    id: data.user.id
                    
                })
                console.log("id send " + JSON.stringify(data.user.id))
                console.log("token send " + JSON.stringify(data.token))

                this.props.parentCallBackToken(data.token)
                this.props.parentCallBackId(data.user.id)
            });
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Se connecter</h2>

                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="login">Identifiant</label><br></br>
                    <input type="text" id="login" value={this.state.login} onChange={this.handleChangeLogin}></input><br></br>
                    <label htmlFor="password">Mot de Passe</label><br></br>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword}></input><br></br><br></br>
                    <input className="btn btn-primary" type="submit"></input><br></br>
                    <a href="https://www.betaseries.com/">Don't have any account yet ?</a>
                    </form> 

                </div>
            </div>
        );
    }
}

export default Login;