import React, { Component } from 'react';
import UserCard from '../../common/UserCard';

class CollaboratorsList extends Component{

    constructor(props){
        super(props);
        this.users = [];
    }

    render(){
        
        return(
            <div className="UsersList">
                <h4>Colaboradores</h4>
                <ul className="users">
                {this.users.map((user)=>{
                    <UserCard user={user} />
                })}
                </ul>
            </div>
        )
    }
}

export default CollaboratorsList;