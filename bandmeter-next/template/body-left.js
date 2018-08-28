import React, { Component } from 'react';

class BodyLeft extends Component{

    state = {
        disabled : true
    }
    handleInput = name => (event) =>{
        if(name !== 'conpassword'){
            this.setState({[name] : event.target.value});
        }else{
            if(event.target.value !== this.state.password){
                document.getElementById('conpassword').setAttribute('class', 'error');
            }else{
                document.getElementById('conpassword').setAttribute('class', 'right');
            }
        }
    }

    handleLegals = () =>{
        this.setState({disabled: !this.state.disabled});
        console.log(this.state.checked);
    }

    validate = () =>{
        console.log(this.state);
    }
    render(){
        return(
            <form className="bodyLeft">
                <h2>Regístrate</h2>
                <input type="text" placeholder="Nombre de usuario" name="nickname" onChange={this.handleInput('nickname')} />
                <input type="text" placeholder="Nombre completo" name="fullname" onChange={this.handleInput('fullname')} />
                <input type="email" placeholder="Correo electrónico" name="email" onChange={this.handleInput('email')} />
                <input type="password" placeholder="Contraseña" name="password" onChange={this.handleInput('password')} />
                <input type="password" placeholder="Confirma tu contraseña" name="conPasword" onChange={this.handleInput('conpassword')} />
                <label><input type="checkbox" onClick={this.handleLegals} /> <span>He leido y acepto las condiciones legales.</span></label>
                <button disabled={this.state.disabled} onClick={this.validate}>Registrar</button>
            <style jsx>{`
                label{text-align:center;margin-left:10px;margin-bottom:40px;display:block;}
                label span{ color: #fff;}
                label input[type=check]{ background:#666;border:none; }
                .bodyLeft{
                    padding:10px;
                    width:40%;
                    margin:5%;
                    display:inline-block;
                }
                form input[type=text], form input[type=password], form input[type=email]{
                    background:#333;
                    border:1px solid #fff;
                    border-radius:5px;
                    padding:10px 15px;
                    font-size:14px;
                    margin:10px;
                    color:#fff;
                    width:calc(100% - 40px);
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
                    width:50%;
                    margin:10px auto;
                    display:block;
                    font-size:14px;
                }
                button:disabled{
                    cursor:default;
                    opacity:0.5;
                }
                button:hover:enabled{
                    background:#b40202;
                    color:#fff;
                    cursor:pointer;
                    border:1px solid #fff;
                }
                button:focus:enabled{
                    outline:none;
                }
                h2{color:#fff;}
            `}</style>
            </form>
        )
    }
}

export default BodyLeft;