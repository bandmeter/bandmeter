import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component{
    
    render(){
        const { user, children } = this.props;

        console.log(user);

        return(
            <div className="container">
                <Header user={user} />
                    {children}
                <Footer />
            </div>
        );
    }
}

export default Layout;