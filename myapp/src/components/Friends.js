import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertHeading } from 'react-bootstrap/Alert';

class Friends extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
            myId: props.myId,
            friends: [],
            friendEmail: "",
            email: ""
            
        };
        this.searchFriend = this.searchFriend.bind(this)
        this.addFriend = this.addFriend.bind(this)
      }

    componentDidMount() { 
        fetch('https://api.betaseries.com/friends/list?key=f10eeafae2e6&token=' + this.state.token + '&id=' + this.state.myId, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            console.log("Friend list response is " + JSON.stringify(data))
        });
    }

    // add friend
    // https://api.betaseries.com/friends/friend?key=f10eeafae2e6&token=99525d85c572&id=1298066&emails=marjorie.pezeron@numericable.fr

    //list des amis GET
    // https://api.betaseries.com/friends/list?key=f10eeafae2e6&token=[YOUR TOKEN]&id=[MY ID]

    // delete friend
    // https://api.betaseries.com/friends/friend?key=f10eeafae2e6&token=[YOUR TOKEN]&id=[Member to delemte]

    // friend request
    // https://api.betaseries.com/friends/requests?key=f10eeafae2e6&token=[YOUR TOKEN]&recieved=true

    // Block friend
    // https://api.betaseries.com/friends/block?key=f10eeafae2e6&token=[YOUR TOKEN]&id=[MEMBER TO BLOCK]



    searchFriend(event) {
        event.preventDefault();

        fetch('https://api.betaseries.com/friends/find?key=f10eeafae2e6&token=' + this.state.token + '&type=emails&emails=' + event.target.value, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                friends: data.users
                // friendEmail: 

            })
            console.log("searchFriend data results are " + JSON.stringify(data))

            console.log("searchFriend email results are " + JSON.stringify(data.users[0].name))
        });
    }

    addFriend(event) {

        console.log("button to add friend with id " + event)
       
        fetch('https://api.betaseries.com/friends/friend?key=f10eeafae2e6&token=' + this.state.token + '&id=' + event +  '&emails=' + this.state.friendEmail, {
            method: 'post'
        })
        .then(response => response.json())
        .then(data => {
            console.log("addFriend response is " + data)
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
                    <input type="text" placeholder="email" id="friend" value={this.friend} onChange={this.searchFriend}></input><br></br><br></br>
                    {this.state.friends.map((friend, index) => (
                            <div key={index} className="">
                                <div>
                                    <div className="friends">
                                        
                                        <div className="caption">
                                            <p>{friend.login}</p>
                                            
                                            <button className='btn btn-info' onClick={this.addFriend(friend.id)} >Demander en Ami</button>
                                                
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