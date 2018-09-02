import React, { Component } from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/footer';

class Layout extends Component {

    constructor(){
        super();
        this.user = localStorage.getItem('user');
    }

    render(){
        const { children } = this.props;
        return(
            <section>
                <Header user={this.user} />
                    { children }
                <Footer />
            </section>
        )
    }
}

export default Layout;