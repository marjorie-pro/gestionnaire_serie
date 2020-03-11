import React, { Component } from 'react';

class Series extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          pictures: []
        };
      }

    componentDidMount() { 
    
        fetch('https://api.betaseries.com/shows/list?key=f10eeafae2e6',{
          method:'get'
          
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data.shows
            })
            console.log(data.shows)
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.items.map((listitem, index)=>(
                        <div key={index}>
                            <h3>{listitem.title}</h3>
                            {/* <p>{listitem.images}</p> */}
                    </div>
                    ))}                 
                </div>
            </div>
        );
    }
}
export default Series;