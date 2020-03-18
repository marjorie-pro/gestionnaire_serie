import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertHeading } from 'react-bootstrap/Alert';

class Friends extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
            friends: []
            
        };
        this.searchFriend = this.searchFriend.bind(this)
        this.addFriend = this.addFriend.bind(this)
      }

    componentDidMount() { 

    }

    searchFriend(event) {
        event.persist()
        fetch('https://api.betaseries.com/friends/find?key=f10eeafae2e6&token=' + this.state.token + '&type=emails&emails=' + event.target.value, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    friends: data.users

                })
                console.log("search " + event.target.value);
                console.log("Friends " + JSON.stringify(data.users));
                console.log("token is " + this.state.token);
                
            });
    }

    addFriend(event) {
        console.log('button to add friend with id ' + event)
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
                    <input type="text" placeholder="email" id="friend" value={this.friend} onChange={this.searchFriend}></input><br></br><br></br>
                    {this.state.friends.map((friend, index) => (
                            <div key={index} className="">
                                <div>
                                    <div className="friends">
                                        
                                        <div className="caption">
                                            <p>{friend.login}</p>
                                            
                                            <button className='btn btn-info' onClick={this.addFriend(friend.id)}>Demander en Ami</button>
                                            
                                          
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
            </div>
        );
    }
}

export default Friends;