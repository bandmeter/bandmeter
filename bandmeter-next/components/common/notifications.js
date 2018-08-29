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

export default Notifications;