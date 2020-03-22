import React from 'react';
// import { Alert } from 'react-bootstrap';
// import { AlertHeading } from 'react-bootstrap/Alert';

class Friends extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
            myId: props.myId,
            friendsList: [],
            friendRequest: [],
            friendSearch: [],
            friendEmail: "",
            email: ""
            
        };
        this.searchFriend = this.searchFriend.bind(this)
        // this.addFriend = this.addFriend.bind(this)
      }

    componentDidMount() { 
        fetch('https://api.betaseries.com/friends/list?key=f10eeafae2e6&token=' + this.state.token + '&id=' + this.state.myId, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            
            // console.log("Friend list response is " + JSON.stringify(data))
            this.setState({
                friendsList: data.users
            })
        });

        fetch('https://api.betaseries.com/friends/requests?key=f10eeafae2e6&token=' + this.state.token + '&received=true', {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            
            // console.log("Friend request is " + JSON.stringify(data.users[0].login))
            this.setState({
                friendRequest: data.users
            })
        });

    }
    updateFriendList(){
        fetch('https://api.betaseries.com/friends/list?key=f10eeafae2e6&token=' + this.state.token + '&id=' + this.state.myId, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            
            console.log("Friend list response is " + JSON.stringify(data))
            this.setState({
                friendsList: data.users
            })
        });

        fetch('https://api.betaseries.com/friends/requests?key=f10eeafae2e6&token=' + this.state.token + '&received=true', {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            
            console.log("Friend request is " + JSON.stringify(data.users.login))
            this.setState({
                friendRequest: data.users
            })
        });

    }


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
                friendSearch: data.users
                // friendEmail: 

            })
            console.log("searchFriend data results are " + JSON.stringify(data))

            // console.log("searchFriend email results are " + JSON.stringify(data.users[0].name))
        });
        this.updateFriendList()

    }

    addFriend(e) {
        // e.preventDefault();
        console.log("button to add friend with id " + e)
       
        fetch('https://api.betaseries.com/friends/friend?key=f10eeafae2e6&token=' + this.state.token + '&id=' + e, {
            method: 'post'
        })
        .then(response => response.json())
        .then(data => {
            console.log("addFriend response is " + JSON.stringify(data))
            this.setState({
                friendsList: []
            })
        });

        this.updateFriendList()
    }

    approveFriend(event) {
        console.log("Button approve friend pushed with id " + event)
        this.addFriend(event)
        this.updateFriendList()

    }

    deleteFriend(event) {
        console.log("button delete friend with id " + event)
        fetch('https://api.betaseries.com/friends/friend?key=f10eeafae2e6&token=' +this.state.token + '&id=' + event, {
            method: 'delete'
        })
        .then(response => response.json())
        .then(data => {
            console.log("deleteFriend response " + JSON.stringify(data))
            this.setState({
                friendsList: []
            })
        });
        this.updateFriendList()

        
    }

    blockFriend(event) {
        console.log("button block friend with id " + event)
        this.updateFriendList()

    }

    render() {
        return (
            <div>
                <h2>Votre liste d'amis</h2>
                {this.state.friendsList.map((friend, index) => (
                            <div key={index} className="">
                                <div>
                                    <div className="friends">
                                        
                                        <div className="caption">
                                            <p>{friend.login}</p>
                                            
                                            <button className='btn btn-warning' onClick={this.deleteFriend.bind(this, friend.id)} >Supprimer</button>
                                            <button className='btn btn-danger' onClick={this.blockFriend.bind(this, friend.id)} >Bloquer</button>
                                                
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                <h2>Demande d'ami</h2>
                {this.state.friendRequest.map((friend, index) => (
                            <div key={index} className="">
                                <div>
                                    <div className="friends">
                                        
                                        <div className="caption">
                                            <p>{friend.login}</p>
                                            
                                            <button className='btn btn-success' onClick={this.approveFriend.bind(this, friend.id)} >Accepter</button>
                                                
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                <h2>Ajouter des amis</h2>
                <label htmlFor="friend">Ajouter un(e) ami(e)</label><br></br>
                    <input type="text" placeholder="email" id="friend" value={this.friend} onChange={this.searchFriend}></input><br></br><br></br>
                    {this.state.friendSearch.map((friend, index) => (
                            <div key={index} className="">
                                <div>
                                    <div className="friends">
                                        
                                        <div className="caption">
                                            <p>{friend.login}</p>
                                            
                                            <button className='btn btn-info' onClick={this.addFriend.bind(this, friend.id)} >Demander en Ami</button>
                                                
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