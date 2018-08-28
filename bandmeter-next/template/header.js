import React, { Component } from 'react';
import { Link } from 'next-routes';
import UserAndSearch from './user-and-search';

class HeaderLogged extends Component{
    render(){
        const { user } = this.props;
        console.log(user);
        return(
            <header>
                <Link href="index">
                    <img src='/static/images/logo.png' alt="Bandmeter" />
                </Link>
                <UserAndSearch user={user} />
            </header>
        )
    }
}

export default HeaderLogged;