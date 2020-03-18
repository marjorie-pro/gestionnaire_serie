import React from 'react';
import Modal from './Modal';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: false,
            modalItems: [],
            pictures: [],

        };
        this.detail = this.detail.bind(this);
    }

    componentDidMount() {
        fetch('https://api.betaseries.com/shows/list?key=f10eeafae2e6&order=popularity&limit=9', {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: data.shows,
                    id: this.state.id
                })
   
            });
    }

    detail(id) {
        fetch('https://api.betaseries.com/shows/display?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    modalItems: data.show,

                })

            });
        this.image(id);
    }

    image(id) {
        fetch('https://api.betaseries.com/pictures/shows?key=f10eeafae2e6&id=' + id, {
            method: 'get',
            headers: {
                "Content-Type": "image/jpeg"
            }
        })

            .then(data => {
               
                this.setState({
                    pictures: data

                })
               
            });
        this.showModal();
    }

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    render() {
        const modalItems = this.state.modalItems;
        const pictures = this.state.pictures;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, index) => (
                            <div key={index} className="col-md-4">
                                <div>
                                    <div className="thumbnail">
                                        <img className="img_series" src={item.images.show} alt="visuel séries"></img>
                                        <div className="caption">
                                            <p>{item.title}</p>
                                            <p><i className="fas fa-star"></i> Note : {item.notes.mean.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                                            <script src="https://www.betaseries.com/js/button.js" async></script>
                                            <a href="https://www.betaseries.com" className="btn btn-primary"
                                                data-type="show"
                                                data-show={item.title}
                                            >Ajouter la série</a>
                                            <button className='btn btn-info' onClick={() => this.detail(item.id)}>detail série</button>
                                        </div>
                                    </div>

                                    <Modal show={this.state.show} onClose={this.showModal}>
                                        <h1>{modalItems.title}</h1>
                                        <img className="img_serie" src={pictures.url} alt="détail séries"></img>
                                        <p>Saison(s) : {modalItems.seasons}</p>
                                        <p>Episode(s) : {modalItems.episodes}</p>
                                        <p>Durée d'un épisode : {modalItems.length} min</p>
                                        <p>{modalItems.description}</p>
                                        <button className="btn btn-primary">Archiver la série</button>
                                    </Modal>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>


            </div >
        );
    }
}
export default Series;

