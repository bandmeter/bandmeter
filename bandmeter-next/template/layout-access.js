import React, { Component } from 'react';
import HeaderAccess from './header-access';
import BodyAccess from './body-access';
import Footer from './footer';

class LayoutAccess extends Component{

    render(){
        return(
            <div className="container">
                <HeaderAccess />
                <BodyAccess />
                <Footer />
                <style jsx>{`
                    .container{
                        width:100%;
                        background:#666;
                    }
                    :global(body){
                        margin:0;
                        padding:0;
                        font-family:system-ui;
                    }
                `}</style>
            </div>
        )
    }
}

export default LayoutAccess;