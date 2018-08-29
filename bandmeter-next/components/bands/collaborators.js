import React, { Component } from 'react';
import UserListed from '../common/user-listed';

class Friends extends Component{
    state = {
        collaborators : []
    }

    render(){
        return(
            <div className="container">
            <h3>Colaboradores</h3>
            <ul className="administradores">
            {
                this.state.collaborators.map((user)=>(
                    <UserListed user={user} />
                ))
            }
            </ul>
            <style jsx>{`
                    .container{
                        width:80%;
                        max-width:768px;
                        border-radius:10px;
                        border: 1px solid #aaa;
                        margin:5% auto;
                        background:#999;
                    }
                    h3{
                        margin:0;
                        background: #ccc;
                        padding:5px 10px;
                        border-bottom:1px solid #000;
                        border-radius:10px 10px 0 0;
                    }
            `}</style>
        </div>
        )
    }
}

export default Friends;