import React from 'react';
// import Modal from './Modal';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            // show: false,
            modalItems: [],
            pictures: [],
            episodes: [],
            show2: false,
            picturesEpisode: [],
            episodesDetail: [],
            token: props.token,
            comment: ""
            // saisons: [],
            // id: '481'
        };
        //this.detail = this.detail.bind(this);
        //this.archiveSerie = this.archiveSerie.bind(this);
    }

    componentDidMount() {
        fetch('https://api.betaseries.com/shows/list?key=f10eeafae2e6&order=popularity&limit=9', {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: data.shows,

                })
                //console.log(data.shows);
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
                    // id: this.state.id
                })
                //console.log(data);
                //console.log(data.show.genres.Comedy);
            });
        this.image(id);
    }

    image(id) {
        fetch('https://api.betaseries.com/pictures/shows?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(data => {
                //console.log(data);
                this.setState({
                    pictures: data
                    // id: this.state.id
                })
                //console.log(data.url);
            });
        // this.showModal();
    }

    // showModal = () => {
    //     this.setState({
    //         ...this.state,
    //         show: !this.state.show
    //     });
    // }

    episode(id) {
        fetch(' https://api.betaseries.com/shows/episodes?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    episodes: data.episodes
                    // id: this.state.id
                })
                //console.log(data);
            });
    }

    pictureEpisode(id) {
        fetch('https://api.betaseries.com/pictures/episodes?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(data => {
                this.setState({
                    picturesEpisode: data
                })
                //console.log(data);
            });
        this.episodeDetail(id);
    }

    episodeDetail(id) {
        fetch(' https://api.betaseries.com/episodes/display?key=f10eeafae2e6&id=' + id, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    episodesDetail: data.episode

                })
                console.log(data);
            });
        // this.showModal2();

    }
    showModal2 = () => {
        this.setState({
            ...this.state,
            show2: !this.state.show
        });
    }

    addSerie(id) {
        let data = this.state;
        fetch('https://api.betaseries.com/shows/show?key=f10eeafae2e6&access_token=' + this.state.token + '&id=' + id, {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then((result) => {
                result.json().then((resp) => {
                    alert("Série ajoutée au compte.")
                    //console.log("resp", resp)
                })
            })

    }

    archiveSerie(id) {
        let dataArchive = this.state;
        fetch('https://api.betaseries.com/shows/archive?key=f10eeafae2e6&access_token=' + this.state.token + '&id=' + id, {
            method: 'post',
            body: JSON.stringify(dataArchive)
        })
            .then((result) => {
                result.json()
                    .then((resp) => {
                        alert("Série archivée.")
                        console.log("resp", resp)
                    })
            })

    }

    vuEpisode(id) {
        let dataEpisode = this.state;
        fetch('https://api.betaseries.com/episodes/watched?key=f10eeafae2e6&access_token=' + this.state.token + '&id=' + id, {
            method: 'post',
            body: JSON.stringify(dataEpisode)
        })
            .then((result) => {
                result.json()
                    .then((resp) => {
                        alert("Episode marqué comme vu.")
                        console.log("resp", resp)
                    })
            })

    }

    submit() {
        console.log(this.state)
    }
    // saison(id) {
    //     fetch(' https://api.betaseries.com/shows/seasons?key=f10eeafae2e6&id=' + id, {
    //         method: 'get'
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 saisons: data
    //                 // id: this.state.id
    //             })
    //             console.log(data);
    //         });
    // }



    render() {
        const modalItems = this.state.modalItems;
        const pictures = this.state.pictures;
        const picturesEpisode = this.state.picturesEpisode;
        const episodesDetail = this.state.episodesDetail;
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
                                            <p><i className="fas fa-star"></i> Note : {item.notes.mean.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
                                            <p>{item.genres.Comedy} {item.genres.Drama} {item.genres.Crime} {item.genres.Horror} {item.genres.Anime} {item.genres.Action} {item.genres.Adventure}
                                                {item.genres.Fantaisy} {item.genres.Animation} {item.genres.ScienceFiction} {item.genres.Miniseries} {item.genres.Documentary}
                                                {item.genres.Reality}{item.genres.Romance}{item.genres.Western}{item.genres.TalkShow}{item.genres.GameShow}{item.genres.Thriller}
                                                {item.genres.Cooked} {item.genres.Soap} {item.genres.Children} {item.genres.Family} {item.genres.Homeandgardening} {item.genres.Mystery}
                                                {item.genres.News} {item.genres.Specialinterest} {item.genres.Sport} {item.genres.Suspense} {item.genres.Trip} {item.genres.History}
                                                {item.genres.Indie} {item.genres.Musicalcomedy} {item.genres.Podcast} {item.genres.War} {item.genres.MartialArts}</p>
                                            <script src="https://www.betaseries.com/js/button.js" async></script>
                                            <button onClick={() => this.addSerie(item.id)} className="btn btn-primary">Ajouter la série</button>


                                            {/* <button className='btn btn-info' onClick={() => this.episode(item.id)}>épisodes</button> */}
                                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={() => this.episode(item.id)}>épisodes</button>
                                        </div>
                                    </div>
                                    {/* <button className="btn" value="show modal" onClick={() => this.detail(item.id)}>more</button> */}

                                    {/* <Modal show={this.state.show} onClose={this.showModal}>
                                        <h1>{modalItems.title}</h1>
                                        <img className="img_serie" src={pictures.url} alt="détail séries"></img>
                                        <p>Saison(s) : {modalItems.seasons}</p>
                                        <p>Episode(s) : {modalItems.episodes}</p>
                                        <p>Durée d'un épisode : {modalItems.length} min</p>
                                        <p>{modalItems.description}</p>
                                    <button onClick={() => this.archiveSerie(item.id)} className="btn btn-primary">Archiver la série</button>
                                    </Modal> */}

                                    <button type="button" className='btn btn-info' data-toggle="modal" data-target="#myModalDetail" onClick={() => this.detail(item.id)}>detail série</button>
                                    <div id="myModalDetail" role="dialog" className="modal fade">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <h1>{modalItems.title}</h1>
                                                    <img className="img_serie" src={pictures.url} alt="détail séries"></img>
                                                    <p>Saison(s) : {modalItems.seasons}</p>
                                                    <p>Episode(s) : {modalItems.episodes}</p>
                                                    <p>Durée d'un épisode : {modalItems.length} min</p>
                                                    <p>{modalItems.description}</p>
                                                    <button onClick={() => this.archiveSerie(modalItems.id)} className="btn btn-primary">Archiver la série</button>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div id="myModal" role="dialog" className="modal fade">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="test">{this.state.episodes.map((it, index) => (
                                                        <div key={index}>
                                                            <p>Saison : {it.season} Episode : {it.episode} <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal2" onClick={() => this.pictureEpisode(it.id)}>{it.code}</button></p>

                                                            <div id="myModal2" role="dialog" className="modal fade">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <script src="https://www.betaseries.com/js/button.js" async></script>
                                                                            <button onClick={() => this.vuEpisode(it.id)} className="btn btn-primary"
                                                                                data-type="episode"
                                                                                data-show={item.title}
                                                                                data-season={it.season}
                                                                                data-episode={it.episode}
                                                                            >Marquer l'épisode comme vu sur BetaSeries</button>
                                                                            <p>{episodesDetail.title}</p>
                                                                            <p>Date de diffusion : {it.date}</p>
                                                                            <p><i className="fas fa-star"></i> Note : {it.note.mean.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
                                                                            <img className="img_episode" src={picturesEpisode.url} alt="visuel épisode"></img><br></br>
                                                                            <input type="text" value={this.state.comment} name="comment" onChange={(data) => { this.setState({ comment: data.target.value }) }}></input><br></br>
                                                                            <button onClick={() => { this.submit() }}>Envoyer</button>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    ))}
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




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
