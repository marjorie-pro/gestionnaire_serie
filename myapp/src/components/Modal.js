import React, { Component } from 'react';

export default class Modal extends React.Component {
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
                    <div className="container">
                        <h1>My first modal</h1>
                        <p>{this.props.children}</p>
                        <button className="button" onClick={(e) => {this.onClose(e)}}>close</button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}