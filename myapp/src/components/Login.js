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
        console.log("password is " + this.state.password)
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

        fetch('https://api.betaseries.com/members/auth?key=f10eeafae2e6&login=' + this.state.login + '&password=' + myPassword, {
            method: 'post'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    token: data.token

                })
                console.log(this.state.token);
                this.props.parentCallBack(data.token)
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
                    <input type="text" id="password" value={this.state.password} onChange={this.handleChangePassword}></input><br></br><br></br>
                    <input type="submit"></input><br></br>
                    <a href="https://www.betaseries.com/">Don't have any account yet ?</a>
                    </form> 

                </div>
            </div>
        );
    }
}

export default Login;