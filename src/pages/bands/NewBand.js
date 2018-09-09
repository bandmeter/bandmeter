import React, { Component } from 'react';

import Content from '../../components/bands/NewContent';
import Layout from '../../template/layout';
import { userService } from '../../services'

class NewBand extends Component{
    constructor(){
        super();
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.users = userService.getAll();
    }
    
    render(){
        return(
            <Layout user={this.userData}>
                <Content user={this.userData} users={this.users} />
            </Layout>
        )
    }
}

export default NewBand;