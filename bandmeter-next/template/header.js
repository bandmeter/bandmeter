import React, { Component } from 'react';
import { Link } from '../routes';
import UserAndSearch from './user-and-search';

class HeaderLogged extends Component{
    render(){
        const { user } = this.props;
        console.log(user);
        return(
            <header>
                <Link route="index">
                    <img src='/static/images/logo.png' alt="Bandmeter" />
                </Link>
                <UserAndSearch user={user} />
                <style jsx>{`
                    header{
                        width:calc(100% - 40px);
                        padding:10px 20px;
                        background:#b40202;
                        min-height:50px;
                        -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
                    }
                    header img{
                        height:50px;
                    }
                    .clr{
                        clear:both;
                    }
                `}</style>
            </header>
        )
    }
}

export default HeaderLogged;