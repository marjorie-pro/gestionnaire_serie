import React from 'react';

class Modal extends React.Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <div id="id01" className="modal-prev">
                    <span onClick={this.props.onClose} className="close" title="Close Modal"></span>
                    <form className="modal-content">
                        <button className="btn btn-primary float-right" onClick={(e) => { this.onClose(e) }}>close</button>
                        <div className="container">

                            <div>{this.props.children}</div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Modal;
