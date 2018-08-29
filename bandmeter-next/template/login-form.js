import React, { Component } from 'react';
import { Link } from '../routes';
import axios from 'axios';

class LoginForm extends Component{

    handleInput = name => (event) =>{
        this.setState({[name]: event.target.value});
    }

    validate = () =>{
        const { username, password } = this.state;
        if(!username){
            alert("Falta el nombre de usuario");
        }
        if(!password){
            alert("Falta la contraseña");
        }

        const payload = {
            email: username,
            password: password
        }

        axios.post('http://localhost:3600/api/user/login', payload).then((response)=>{
            console.log(response);
        });
    }

    render(){
        return(
            <form className="loginform">
                <input type="text" name="username" id="username" onChange={this.handleInput('username')} placeholder="Nombre de usuario o email" />
                <input type="password" name="password" id="password" placeholder="Contraseña" onChange={this.handleInput('password')} />
                <button onClick={this.validate}>Entrar</button>
                <Link route="remember">
                    <a className="remember">¿Has olvidado tu contraseña?</a>
                </Link>                
                <style jsx>{`
                    .remember{
                        display:block;
                        text-align:left;
                        color:#fff;
                        text-decoration:none;
                        font-size:11px;
                        margin-left:12px;
                        margin-top:-8px;
                    }
                    form {
                        float:right;
                        display:inline;
                        margin-top:3px;
                    }
                    form input{
                        background:#333;
                        border:1px solid #fff;
                        border-radius:5px;
                        padding:5px 10px;
                        font-size:12px;
                        margin:10px;
                        color:#fff;
                    }
                    form input:focus{
                        outline:none;
                    }
                    button{
                        background:#fff;
                        border: 1px solid #000;
                        border-radius:5px;
                        padding:5px 10px;
                        color:#b40202;
                    }
                    button:hover{
                        background:#b40202;
                        color:#fff;
                        cursor:pointer;
                        border:1px solid #fff;
                    }
                    button:focus{
                        outline:none;
                    }
            `}</style>
            </form>
        )
    }
}

export default LoginForm;