import React, { Component } from 'react';

class Notification extends Component{

    render(){
        const { notification } = this.props;
        return(
            <li className="notification">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <style jsx>{`
                    .notification{
                        width:100%;
                        padding:2rem 3rem;
                        background: #fff;
                    }
                `}</style>
            </li>
        )
    }

}

export default Notification;