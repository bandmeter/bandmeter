import React, { Component } from 'react';
import NewBandForm from './components/new-band-form';
import UsersList from './components/users-list';
import Members from './components/members-list';
import Administrators from './components/administrators-list';
import Collaborators from './components/collaborators-list';
import { bandService } from '../../services';


class NewContent extends Component{

  state = {
    members: [],
    administrators: [],
    collaborators:[],
    name:"",
    bio:""
  }

  handleForm = name => (event) =>{
    this.setState({[name]: event.target.value});
  }

  submit = () =>{
    if(this.state.name !== ''){
      bandService.addBand(this.state).then((response)=>{
        console.log(response);
      });
    }
  }

  setUsers = name => (event) =>{
    this.setState({[name]: event.target.value});
  }

  render() {
    
      const { user, users } = this.props;
    
      return (
          <section className="new-band">
            <NewBandForm onChange={this.handleForm} onSumbit={this.submit} />
            <Members user={user} onChange={this.setUsers('members')}  />
            <Administrators user={user} onChange={this.setUsers('administrators')} />
            <Collaborators onChange={this.setUsers('collaborators')} />
            <UsersList users={users} />
          </section>
      );
  }
}

export default NewContent;