import React from 'react';
import Modal from './Modal';

class Series extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            items: []
        };
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
    }

    
    componentDidMount() { 
        fetch('https://api.betaseries.com/shows/list?key=f10eeafae2e6&order=popularity',{
            method:'get'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data.shows
            })
            
        });
    }
    
    handleButtonPress() {
        this.buttonPressTimer = setTimeout(() => alert('long press activated'), 1500);
    }
    
    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
    }

    showModal = () => {
        this.setState({
          ... this.state,
          show: !this.state.show
        });

      }

    render() {
        return (    
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((listitem, index)=>(
                        <div key={index} className="col-md-4">
                            <div>
                                <div className="thumbnail">
                                    <img className="img_series" src={listitem.images.show} alt="visuel séries"></img>
                                    <div className="caption">
                                        <p>{listitem.title}</p>
                                        <script src="https://www.betaseries.com/js/button.js" async></script>
                                        <a href="https://www.betaseries.com" className="btn btn-primary"
                                            data-type="show"
                                            data-show="Desperate Housewives"
                                            >+ Ajouter la série</a>
                                            <button 
                                            onTouchStart={this.handleButtonPress} 
                                            onTouchEnd={this.handleButtonRelease} 
                                            onMouseDown={this.handleButtonPress} 
                                            onMouseUp={this.handleButtonRelease} 
                                            onMouseLeave={this.handleButtonRelease}>
                                            Infos
                                            </button>
                        <button className="button" value="show modal" onClick={this.showModal} >more</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    <Modal show={this.state.show} onClose={this.showModal}>
                        content
                    </Modal>
                    </div> 
                </div>
            </div>
        );
    }
}
export default Series;

