import React, { Component } from 'react';
import NewBandForm from './components/new-band-form';
import UsersList from './components/users-list';

class NewContent extends Component{


    handleFile = (event) =>{
        console.log(event.target.value);
    }

    handleForm = key => (event, value) => {
        this.setState({
          [key]: value,
        });
      };
    
    render() {

      const { user, users } = this.props;
    
      return (
        <section className="new-band">
          <NewBandForm />
        </section>
      );
  }
}

export default NewContent;