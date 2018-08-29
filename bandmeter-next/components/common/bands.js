import React, { Component } from 'react';
import Band from './band';
import { Link } from '../../routes'; 

class Bands extends Component{

    render(){
        const { bands } = this.props;
        return(
            <div className="container">
            <h3>Tus bandas <Link route="newBand"><a>Crear una nueva banda</a></Link></h3>
            <ul className="BandsList">
            {
                bands.map((band)=>(
                    <Band band={band} />
                ))
            }
            </ul>
            <style jsx>{`
                    .container{
                        width:80%;
                        max-width:768px;
                        border-radius:10px;
                        border: 1px solid #aaa;
                        margin:5% auto;
                        background:#999;
                    }
                    h3{
                        margin:0;
                        background: #ccc;
                        padding:5px 10px;
                        border-bottom:1px solid #000;
                        border-radius:10px 10px 0 0;
                    }
                    h3 a{
                        color:#fff;
                        text-decoration:none;
                        float:right;
                    }
            `}</style>
        </div>
        )
    }
}

export default Bands;