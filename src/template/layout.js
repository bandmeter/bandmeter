import React, { Component } from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/footer';

class Layout extends Component {

    constructor(){
        super();
    }

    render(){
        const { children, user } = this.props;
        return(
            <section className="home">
                <Header user={user} />
                    { children }
                <Footer />
            </section>
        )
    }
}

export default Layout;