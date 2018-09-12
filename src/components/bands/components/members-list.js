import React, { Component } from 'react';
import UserCard from '../../common/UserCard';

class MembersList extends Component{
    constructor(props){
        super(props);
        this.users = [props.user];
    }

    render(){
        return(
                <div className="UsersList">
                    <h4>Miembros</h4>
                    <ul className="users">
                    {this.users.map((user)=>{
                        return <UserCard user={user} />
                    })}
                    </ul>
                    <style jsx>{`
                        .UsersList{
                            width: 20%;
                            padding: 1% 2%;
                            border: 1px solid #aaa;
                            margin: 2% 0 -1% 1%;
                            background: #fff;
                            border-radius: 10px;
                            float: left;
                            height: 200px;
                        }
                        h4{font-size:1.2rem;border-bottom:1px solid #aaa;}
                    `}</style>
                </div>
        )
    }
}

export default MembersList;