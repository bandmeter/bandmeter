import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import User from '../../components/home/User';
import './Bands.css';

import Header from '../../components/common/Header/Header';
import SideMenu from '../../components/common/SideMenu/side-menu';
import Footer from '../../components/common/Footer/footer';
import Content from '../../components/bands/Content';


class Bands extends Component {
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

    handleSideMenu = (open) =>{
        this.setState({sideMenuOpen: !this.state.sideMenuOpen});
    }

    render(){
        if(!this.userData){
            return(<Redirect to="/access" />)
        }
        return (
            <section className="home">
                <Header onChange={this.handleSideMenu} />
                <SideMenuBands open={this.state.sideMenuOpen} />
                <Content user={this.userData} />
                <Footer />
            </section>
        )
    }
}

export default Bands;