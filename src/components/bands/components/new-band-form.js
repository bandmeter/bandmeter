import React, { Component } from 'react';
import axios from 'axios';

class NewBandForm extends Component{

    state = {
        logo: null,
        pictue: null
    }
    handleInput = name => (event) =>{
        this.setState({[name]: event.target.value});
    }

    handleFile = name => (event) =>{
        console.log(URL.createObjectURL(event.target.files[0]));
        axios.get(URL.createObjectURL(event.target.files[0])).then((response)=>{
            console.log(response);
            this.setState({[name]: atob(response.data)});
        });
    }
    render(){
        return(
            <form>
                <input type="text" onChange={this.handleInput('name')} placeholder="Escribe el nombre de la banda" />
                <input type="file" onChange={this.handleFile('logo')} />
                <img src={this.state.logo} />
                <input type="file" onChange={this.handleFile('picture')} />
                <textarea onChange={this.handleInput('bio')} placeholder="Escribe una breve biografía de la banda">
                </textarea>
            </form>
        )
    }
}

export default NewBandForm;