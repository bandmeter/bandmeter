import React, { Component } from 'react';
import Band from './band';
class Bands extends Component{

    render(){
        const { bands } = this.props;
        return(
            <div className="container">
            <h3>Tus bandas</h3>
            <ul className="BandsList">
            {
                bands.map((band)=>(
                    <Band band={band} />
                ))
            }
            </ul>
            <style jsx>{`
                .container{
                    width:100%;
                    border-radius:10px;
                    border: 1px solid #aaa;
                    margin:3rem;
                }
            `}</style>
        </div>
        )
    }
}

export default Bands;