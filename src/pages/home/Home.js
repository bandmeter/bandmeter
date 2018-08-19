import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import User from '../../components/home/User';
import './home.css';

import Header from '../../components/common/Header/Header';
import SideMenu from '../../components/common/SideMenu/side-menu';
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

    handleSideMenu = (open) =>{
        this.setState({sideMenuOpen: !this.state.sideMenuOpen});
    }
    handleSideMenuLink  = (link) =>{
        this.props.history.go(link);
    }

    render(){
        if(!this.userData){
            return(<Redirect to="/access" />)
        }
        return (
            <section className="home">
                <Header onChange={this.handleSideMenu} />
                <SideMenu open={this.state.sideMenuOpen} onChange={this.handleSideMenuLink} />
                <Content user={this.userData} />
                <Footer />
            </section>
        )
    }
}

export default Home;