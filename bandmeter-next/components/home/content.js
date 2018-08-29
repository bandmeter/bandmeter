import React, { Component } from 'react';
import Notifications from '../common/notifications';
import Bands from '../common/bands';

class Content extends Component{

    render(){
        const { user } = this.props;
        if(!user.notifications){
            user.notifications = [];
            user.notifications.push({
                _id: 111111111111,
                sender:'Bandmeter',
                receiver: user,
                message: "Bienvenido a Bandmeter.com",
                notificationType: "message",
                read: false
            });
        }

        return(
            <section>
                <Notifications notifications={user.notifications} />
                <Bands bands={user.bands} />
            </section>
        )
    }
}

export default Content;