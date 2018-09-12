import React, { Component } from 'react';

class Band extends Component{

    render(){
        const { band } = this.props;
        console.log("En band", band);
        return (
            <p>{band.name}</p>
        )
    }
}

export default Band;