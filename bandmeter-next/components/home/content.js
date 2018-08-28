import React, { Component } from 'react';
import Notifications from '../common/notifications';
import Bands from '../common/bands';

class Content extends Component{
    render(){
        const { user } = this.props;

        return(
            <section>
                <Notifications notifications={user.notifications} />
                <Bands bands={user.bands} />
            </section>
        )
    }
}

export default Content;