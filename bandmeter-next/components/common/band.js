import React, { Component } from 'react';

class Band extends Component{
    render(){
        const { band } = this.props;

        return(
            <li className="band">
                <h4>{band.name}</h4>
                <img src={band.image} alt={band.name} />
            </li>
        )
    }
}

export default Band;