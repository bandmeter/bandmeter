import React, { Component } from 'react';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';
const plugins = { dvr:validatorjs };

const fields = [
{
    name: 'email',
    label: 'Correo electrónico',
    placeholder: 'Escribe aquí tu correo electrónico',
    rules: 'required|email|string|between:5,25'
},{
    name: 'paswword',
    label: 'Contraseña',
    placeholder: 'Escribe aquí tu contraseña',
    rules: 'required|string|between:8,12'
},{
    name: 'paswordConfirmed',
    label: 'Confirma tu contraseña',
    placeholder: 'Repite tu contraseña',
    rules: 'required|string|same:password'
}];

const hooks = {
    onSuccess(form){
        alert("Formulario válido");
    },
    onError(form){
        alert("El formulario tiene errores");
    }
}

const form = new MobxReactForm({fields},{plugins, hooks });

class Register extends Component {
    render(){
        return(
            <div>Register</div>
        )
    }
}