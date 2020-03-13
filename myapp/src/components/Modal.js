// import React, { Component } from 'react';

// class Modal extends Component {
//     onClose = (e) => {
//         this.props.onClose && this.props.onClose(e);
//     }
//     render() {
//         if (!this.props.show) {
//             return null;
//         }
//         return (
//             <div>
//                 <div id="id01" className="modal-prev">
//                     <span onClick={this.props.onClose} className="close" title="Close Modal"></span>
//                     <form className="modal-content">
//                         <div className="container">
//                             <h1>My first modal</h1>
//                             <p>{this.props.children}</p>
//                             <button className="button" onClick={(e) => { this.onClose(e) }}>close</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Modal;


import React from 'react';
// import Series from 'Series';


class Modal extends React.Component {



    render() {
        return (
            <div>
                test...
                <p>{this.props.children}</p>


            </div>
        );
    }
}
export default Modal;