import React, { Component } from 'react';
import Home from './home';
import Access from './access';
import 'isomorphic-fetch';
import config from '../config.json';
import axios from 'axios';

class Index extends Component{

    state = {
        userData: undefined
    }

    componentDidMount(){
        this.setState({userData : JSON.parse(sessionStorage.getItem('user-data'))});

        if(this.state.userData){
            let payload ={
                userid : this.state.userData._id
            }
            axios.post(`${config.apiBaseUrl}/islogged`, payload).then((response)=>{
                console.log(response);
                if(response.data === 'ko'){
                    this.setState({userData : undefined});
                    sessionStorage.setItem('user-data', undefined);
                }else{
                    sessionStorage.setItem('user-data', response);
                    this.setState({userData: JSON.stringify(response)});
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