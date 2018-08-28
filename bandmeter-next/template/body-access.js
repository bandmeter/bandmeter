import react, { Component } from 'react';
import BodyLeft from './body-left';
import BodyRight from './body-right';

class BodyAccess extends Component{
    render(){
        return(
            <div className="container">
                <BodyLeft />
                <BodyRight />
            </div>
        )
    }
}

export default BodyAccess;