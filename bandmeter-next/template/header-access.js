import React, { Component } from 'react';
import { Link } from '../routes';

import LoginForm from './login-form';

class HeaderAccess extends Component{

    render(){
        return(
            <header>
                <Link route="index">
                    <a>
                        <img className="header-logo" src='/static/images/logo.png' alt="Bandmeter" />
                    </a>
                </Link>
                <LoginForm />
                <div className="clr"></div>
                <style jsx>{`
                    header{
                        width:calc(100% - 40px);
                        padding:10px 20px;
                        background:#b40202;
                        min-height:60px;
                        -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                    }
                    header img{
                        height:120px;
                        position:absolute;
                    }
                    .clr{
                        clear:both;
                    }
                `}</style>
            </header>
        )
    }
}

export default HeaderAccess;