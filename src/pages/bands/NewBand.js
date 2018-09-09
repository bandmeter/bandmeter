import React, { Component } from 'react';

import Content from '../../components/bands/NewContent';
import Layout from '../../template/layout';
import { userService } from '../../services';

class NewBand extends Component{
    state = {
        users: []
    }
    constructor(){
        super();
        this.userData = JSON.parse(localStorage.getItem('user'));
        userService.getAll().then((response)=>{
            this.setState({users: response});
        });
    }
    
    render(){
        const {users} = this.state;
        return(
            <Layout user={this.userData}>
                <Content user={this.userData} users={users} />
            </Layout>
        )
    }
}

export default NewBand;