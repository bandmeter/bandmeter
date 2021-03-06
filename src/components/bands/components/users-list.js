import React, { Component } from 'react';
import UserCard from '../../common/UserCard';

class UsersList extends Component{

    render(){
        const { users } = this.props;
        
        return(
            <div className="UsersList">
                <h4>Usuarios de Bandmeter</h4>
                <ul className="users">
                {users.map((user)=>{
                   return <UserCard user={user} />
                })}
                </ul>
            </div>
        )
    }
}

export default UsersList;