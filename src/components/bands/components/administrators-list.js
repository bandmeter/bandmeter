import React, { Component } from 'react';
import UserCard from '../../common/UserCard';

class AdministratorsList extends Component{

    constructor(props){
        super(props);
        this.users = [props.user];
    }

    render(){
        
        return(
            <div className="UsersList">
                <h4>Administradores</h4>
                    {this.users.map((user)=>{
                        return <UserCard user={user} />
                    })}
            </div>
        )
    }
}

export default AdministratorsList;