import React, { Component } from 'react';

<<<<<<< HEAD
export default class Modal extends React.Component {
=======
class Modal extends Component {
>>>>>>> e374e14c006f33f40e568403f9a3f4577f6e265f
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
<<<<<<< HEAD
                <div id="id01" class="modal">
                    <span onClick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal"></span>
                    <form className="modal-content">
                    <div className="container">
                        <h1>My first modal</h1>
                        <p>{this.props.children}</p>
                        <button className="button" onClick={(e) => {this.onClose(e)}}>close</button>
                    </div>
=======
                <div id="id01" className="modal-prev">
                    <span onClick={this.props.onClose} className="close" title="Close Modal"></span>
                    <form className="modal-content">
                        <div className="container">
                            <h1>My first modal</h1>
                            <div>{this.props.children}</div>
                            <button className="btn btn-primary" onClick={(e) => { this.onClose(e) }}>close</button>
                        </div>
>>>>>>> e374e14c006f33f40e568403f9a3f4577f6e265f
                    </form>
                </div>
            </div>
        );
    }
<<<<<<< HEAD
}
=======
}
export default Modal;


// import React from 'react';



// class Modal extends React.Component {



//     render() {
//         return (
//             <div>
//                 test...
//                 <p>{this.props.children}</p>


//             </div>
//         );
//     }
// }
// export default Modal;
>>>>>>> e374e14c006f33f40e568403f9a3f4577f6e265f
