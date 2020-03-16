import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertHeading } from 'react-bootstrap/Alert';

class Friends extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
        this.searchFriends = this.searchFriends.bind(this)
      }

    componentDidMount() { 

    }

    searchFriends(event) {
        event.preventDefault();
        fetch('https://api.betaseries.com/friends/find?key=f10eeafae2e6&token=94a283377170&type=emails&emails=marjorie.pezeron@numericable.fr', {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    friends: data

                })
                console.log("Friends " + data);
            });
    }

    render() {
        return (
            <div>
                <h2>Votre liste d'amis</h2>
                <ul>
                    <li>list friends here</li>
                </ul><br></br>
                <h2>Ajouter des amis</h2>
                <label htmlFor="friend">Ajouter un(e) ami(e)</label><br></br>
                    <input type="text" placeholder="email" id="friend" value={this.friend} onChange={this.searchFriends}></input><br></br><br></br>
            </div>
        );
    }
}

export default Friends;