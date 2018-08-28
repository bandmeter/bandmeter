import React, { Component } from 'react';
import Layout from '../template/layout';
import Content from '../components/home/content';

class Home extends Component{

    render(){
        const { user } = this.props;

        return(
            <Layout user={user}>
                <Content user={user} />
            </Layout>
        )
    }
}

export default Home;
