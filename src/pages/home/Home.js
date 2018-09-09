import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import './home.css';

import Layout from '../../template/layout';
import Content from '../../components/home/Content';

class Home extends Component {

    constructor (){
        super();
        this.userData = JSON.parse(localStorage.getItem('user'));
    }

    render(){
        return (
            <Layout className="home" user={this.userData}>
                <Content user={this.userData} />
            </Layout>
        )
    }
}

export default Home;