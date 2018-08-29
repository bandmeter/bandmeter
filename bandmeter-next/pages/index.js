import React, { Component } from 'react';
import Home from './home';
import Access from './access';
import 'isomorphic-fetch';
import config from '../config.json';
import axios from 'axios';

class Index extends Component{

    state = {
        logged : false,
        userData: undefined
    }
    componentDidMount(){
        const userData = JSON.parse(sessionStorage.getItem('user-data'));
        this.setState({userData: userData});
        if(this.state.userData){
            let payload ={
                userid : this.state.userData._id
            }
            axios.post(`${config.apiBaseUrl}/islogged`, payload).then((response)=>{
                if(response.data === 'ko'){
                    this.setState({userData : undefined});
                }
            });
        }
    }


    render(){
        if(!this.state.userData){
            return(
                <Access />
            )
        }else{
            return(
                <Home user={this.state.userData} />
            )
        }
    }
}

export default Index;