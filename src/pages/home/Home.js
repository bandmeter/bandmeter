import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import './home.css';

import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/footer';
import Content from '../../components/home/Content';

class Home extends Component {
    state = {
        logged : false,
        sideMenuOpen: false
    }
    constructor(props){
        super(props);
        this.userData = JSON.parse(sessionStorage.getItem('user-data'));
        if(this.userData){
            let payload ={
                userid : this.userData._id
            }
            axios.post(`${config.apiBaseUrl}/islogged`, payload).then((response)=>{
                if(response.data === 'ko'){
                    this.userData = undefined;
                }
            });
        }
    }

    render(){
        if(!this.userData){
            return(<Redirect to="/access" />)
        }
        return (
            <section className="home">
                <Header />
                <Content user={this.userData} />
                <Footer />
            </section>
        )
    }
}

export default Home;