import React, { Component } from 'react';
import Notification from './notification';

class Notifications extends Component{

    render(){
        const { notifications } = this.props;
        return (
            <div className="container">
                <h3>Notificaciones</h3>
                <ul className="NotificationsList">
                {
                    notifications.map((notification)=>(
                        <Notification notification={notification} />
                    ))
                }
                </ul>
                <style jsx>{`
                    .container{
                        width:100%;
                        border-radius:10px;
                        border: 1px solid #aaa;
                        margin:3rem;
                    }
                `}</style>
            </div>
        )
    }
}

export default Notifications;