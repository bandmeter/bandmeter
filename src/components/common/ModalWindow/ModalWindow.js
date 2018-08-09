import React, { Component } from 'react';
import './ModalWindow.css';

class ModalWindow extends Component {

    state = {

    }

    constructor(props){
        super(props);
        this.data = {message: props.message, type : `ModalHeader ${props.type}`};
        console.log(props);
        switch (props.type){
            case 'success':
                this.data.title = "Felicidades";
                break;
            case 'error':
                this.data.title = 'Ha habido un error';
                break;
        }
    }

    render(){
        return(
            <div className="ModalContainer">
                <div className="ModalWindow">
                    <div className={this.data.type}>
                        <span className="ModalTitle">{this.data.title}</span>
                        <div className="ModalClose" onClick={this.props.closeModal}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <p className="ModalMessage">{this.data.message}</p>
                    <button className="btn btn-success" onClick={this.props.closeModal}>Aceptar</button>
                </div>
            </div>
        )
    }
}

export default ModalWindow;