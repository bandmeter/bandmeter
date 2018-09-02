import React, { Component } from 'react';

import Content from '../../components/bands/NewContent';
import Layout from '../../template/layout';

class NewBand extends Component{

    constructor(){
        super();
        this.userData = JSON.parse(localStorage.getItem('user'));
    }
    
    render(){
        return(
            <Layout>
                <Content user={this.userData} />
            </Layout>
        )
    }
}

export default NewBand;