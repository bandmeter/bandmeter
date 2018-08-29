import React, { Component } from 'react';

class UserListed extends Component{
    render(){
        const { user } = this.props;

        console.log(user);

        return(
            <li className="user">
                <h4>{user.fullname}</h4>
                <img src={user.image} alt={user.fullname} />
            </li>
        )
    }
}

export default UserListed;