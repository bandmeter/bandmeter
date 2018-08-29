import React, { Component } from 'react';
import Administrators from './administrators';
import Members from './members';
import Collaborators from './collaborators';
import Friends from '../common/friends'

class Content extends Component{

    handleInput = name => (event) =>{
        this.setState([name], event.target.value);
    }

    handleFile = name => (event) =>{
        console.log(event.target.value);
    }
    render(){
        const { user } = this.props;
        return(
            <div className="container">
                <form>
                    <input type="text" onChange={this.handleInput('name')} />
                    <input type="file" onChange={this.handleFile('logo')} />
                    <input type="file" onChange={this.handleFile('imageBand')} />
                    <input type="text" onChange={this.handleInput('musicStyle')} />
                </form>
                <Administrators user={user} />
                <Members user={user} />
                <Collaborators />
                <Friends user={user.firends}/>
            </div>
        )
    }
}

export default Content;