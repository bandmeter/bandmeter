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
                <style jsx>{`
                    .container{
                        width:100%;
                        min-height:calc(100vh - 50px);
                        background:#666;
                    }
                    :global(body){
                        margin:0;
                        padding:0;
                        font-family:system-ui;
                    }
                `}</style>
            </div>
        );
    }
}

export default Layout;