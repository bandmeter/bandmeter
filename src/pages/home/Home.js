import React, { Component } from 'react';
import config from '../../config.json';

import { Redirect } from 'react-router' 
import axios from 'axios';

import User from '../../components/home/User';

class Home extends Component {
    status = {
        logged : false
    }
    constructor(props){
        super(props);
        this.userData = JSON.parse(localStorage.getItem('userData'));

        if(this.userData){
            let img = localStorage.getItem('profileImage');
            this.imageUrl = img;
        }

        axios.post(`${config.apiBaseUrl}/islogged`).then((response)=>{
            console.log(response.data);
            if(response.data !== 'ko'){
                this.setState({logged: true});
            }
        });
    }

    componentDidMount(){
        if(this.userData){
            console.log(this.userData);
        }
    }

    render(){
        if(!this.status.logged){
            return(<Redirect to="/access" />)
        }
        return (
            <section className="home">
                <User imageUrl={this.imageUrl} userName={this.userData.profile.name} />
            </section>
        )
    }
}

export default Home;