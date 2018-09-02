import React, { Component } from 'react';

class Content extends Component{

    constructor(props){
        super(props);
        this.user = props.user;
        this.bands = props.user.bands;
    }
    
    render(){
        return(
            <div className="bands-content">Contenido de la página de bandas.</div>
        )
    }
}

export default Content;