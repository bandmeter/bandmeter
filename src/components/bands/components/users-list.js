import React, { Component } from 'react';

class UsersList extends Component{

    render(){
        const { users } = this.props;
        
        return(
            <ul className="users">
                {users.map((user)=>{
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <span className="userName">user.name</span>
                    </div>
                })}
            </ul>
        )
    }
}

export default UsersList;