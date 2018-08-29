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
                        list-style:none;
                    }
                `}</style>
            </li>
        )
    }

}

export default Notification;