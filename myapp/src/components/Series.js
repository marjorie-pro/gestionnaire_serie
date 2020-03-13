import React from 'react';
import Modal from './Modal';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: false,
            modalItems: []
            // id: '481'
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
                console.log(data.shows);
            });
    }



    detail(id) {
        fetch('https://api.betaseries.com/shows/display?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    modalItems: data.show
                    // id: this.state.id
                })
                console.log(data.show);
                console.log(data.show.title);
            });
        this.showModal();
    }

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }
    // showSeriesDetail(item) {

    //     this.setState({
    //         title: item.title,
    //         component: Modal,
    //         passProps: { item }
    //     });
    // }


    showModal = () => {
        this.setState({
            ... this.state,
            show: !this.state.show
        });

    }

    render() {
        const modalItems = this.state.modalItems;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, index) => (
                            <div key={index} id={item.id} className="col-md-4">
                                <div>
                                    <div className="thumbnail">
                                        <img className="img_series" src={item.images.show} alt="visuel séries"></img>
                                        <div className="caption">
                                            <p>id : {item.id}</p>
                                            <p>{item.title}</p>
                                            <script src="https://www.betaseries.com/js/button.js" async></script>
                                            <a href="https://www.betaseries.com" className="btn btn-primary"
                                                data-type="show"
                                                data-show="Desperate Housewives"
                                            >+ Ajouter la série</a>
                                            <button className='btn btn-info' onClick={() => this.detail(item.id)}>detail</button>
                                        </div>
                                    </div>
                                    <button className="btn" value="show modal" onClick={() => this.detail(item.id)}>more</button>

                                    <Modal show={this.state.show} onClose={this.showModal}>
                                        <p>{modalItems.title}</p>
                                        {/* <img className="img_series" src={modalItems.images.banner} alt="détail séries"></img> */}
                                        <p>nombre de personnage : {modalItems.characters}</p>
                                    </Modal>
                                    {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                                    <div id="myModal" role="dialog" className="hide">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    <h4 className="modal-title">Modal Header</h4>
                                                </div>
                                                <div className="modal-body">
                                                    {item.title}
                                                    <p>Some text in the modal.</p>
                                                    <div>{modalItems.title}</div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>

                            </div>
                        ))}
                        {/* <Modal show={this.state.show} onClose={this.showModal}>
                            content
                    </Modal> */}
                    </div>
                </div>

                {/* {this.state.modalItems.map((modalItem, index) => (
                    <div key={index}>
                        {modalItem.title}
                    </div>
                ))} */}



            </div>
        );
    }
}
export default Series;

