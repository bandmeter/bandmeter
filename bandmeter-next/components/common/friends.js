import React, { Component } from 'react';
import UserListed from './user-listed';

class Friends extends Component{

    render(){
        const { friends } = this.props;
        return(
            <div className="container">
            <h3>Tus amigos</h3>
            <ul className="FriendsList">
            {
                friends.map((friend)=>(
                    <UserListed user={friend} />
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