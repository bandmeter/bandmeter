import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import User from '../../components/home/User';
import './home.css';

import Header from '../../components/common/Header/Header';

class Home extends Component {
    status = {
        logged : false
    }
    constructor(props){
        super(props);
        this.userData = JSON.parse(sessionStorage.getItem('user-data'));
        if(this.userData){
            let payload ={
                userid : this.userData._id
            }
            axios.post(`${config.apiBaseUrl}/islogged`, payload).then((response)=>{
                console.log(response.data);
                if(response.data === 'ko'){
                    this.userData = undefined;
                }
            });
        }
    }

    componentDidMount(){
        if(this.userData){
            console.log(this.userData);
        }
    }

    render(){
        if(!this.userData){
            return(<Redirect to="/access" />)
        }
        return (
            <section className="home">
                <Header />
                <User imageUrl={this.userData.image} userName={this.userData.fullname} />
            </section>
        )
    }
}

export default Home;