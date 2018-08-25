import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/footer';
import Content from '../../components/bands/NewContent';

class NewBand extends Component{

    constructor(){
        super();
        this.userData = JSON.parse(sessionStorage.getItem('user-data'));
    }
    render(){
        return(
            <section className="home">
                <Header onChange={this.handleSideMenu} />
                <Content user={this.userData} />
                <Footer />
            </section>
        )
    }
}

export default NewBand;