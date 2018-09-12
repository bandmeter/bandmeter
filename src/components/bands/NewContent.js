import React, { Component } from 'react';
import NewBandForm from './components/new-band-form';
import UsersList from './components/users-list';
import Members from './components/members-list';
import Administrators from './components/administrators-list';
import Collaborators from './components/collaborators-list';
import { bandService } from '../../services';
import ModalWindow from '../common/ModalWindow/ModalWindow';

class NewContent extends Component{

  state = {
    members: [],
    administrators: [],
    collaborators:[],
    name:"",
    bio:""
  }

  handleForm = (name, value) =>{
    this.setState({[name]: value});
  }

  submit = () =>{
    if(this.state.name !== ''){
      bandService.addBand(this.state).then((response)=>{
        const { user } = this.props;
        user.bands.push(response);
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({message:"La nueva banda se ha guardado correctamente.", type:"success"});
      });
    }
  }

  closeModal = () =>{
    this.setState({});
  }

  setUsers = name => (event) =>{
    this.setState({[name]: event.target.value});
  }

  componentDidMount(){
    const { user } = this.props;
    const users = [];
    users.push(user);
    this.setState({members:users, administrators:users});
  }
  
  render() {
    
      const { user, users } = this.props;
    
      return (
          <section className="new-band">
            {this.state.message ? <ModalWindow message={this.state.message} type={this.state.type} closeModal={this.closeModal} /> : '' }
            <NewBandForm onChange={this.handleForm} onSubmit={this.submit} />
            <Members user={user} onChange={this.setUsers}  />
            <Administrators user={user} onChange={this.setUsers} />
            <Collaborators onChange={this.setUsers} />
            <UsersList users={users} />
          </section>
      );
  }
}

export default NewContent;