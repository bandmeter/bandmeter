import React, { Component } from 'react';
import axios from 'axios';

class NewBandForm extends Component{

    state = {
        logo: null,
        pictue: null
    }
    handleInput = name => (event) =>{
        this.setState({[name]: event.target.value});
        this.props.onChange(name,event);
    }

    handleFile = name => (event) =>{
        axios.get(URL.createObjectURL(event.target.files[0])).then((response)=>{
            this.setState({[name]: atob(response.data)});
        });
    }
    render(){
        return(
            <div className="form">
                <h3>Nueva banda:</h3>
                <label>
                    <p>Nombre de la banda:</p>
                    <input type="text" onChange={this.handleInput('name')} placeholder="Escribe el nombre de la banda" />
                </label>
                <label className="imageUpload imageUploadFirst">
                    <p>Logo de la banda</p>
                    <button className="upload">Seleccionar imagen</button>
                    <input type="file" onChange={this.handleFile('logo')} />
                    <img src={this.state.logo} />
                </label>
                <label className="imageUpload imageUploadLast">
                    <p>Imagen de la banda</p>
                    <button className="upload">Seleccionar imagen</button>
                    <input type="file" onChange={this.handleFile('picture')} />
                    <img src={this.state.picture} />
                </label>
                <label>
                    <p>Biografía</p>
                    <textarea onChange={this.handleInput('bio')} placeholder="Escribe una breve biografía de la banda"></textarea>
                </label>
                <button className="submit" onClick={this.handleSubmit}>Crear nueva banda</button>
                <style jsx>{`
                    .form{
                        width:40%;
                        padding:2% 3%;
                        border:1px solid #aaa;
                        margin:2% 2% 2% 5%;
                        background:#fff;
                        border-radius:10px;
                        float:left;
                    }
                    .form h3{
                        width:100%;
                        display:block;
                        position:none;
                    }
                    .form label{
                        width:100%;
                    }
                    .imageUploadFirst{
                        width:48%!important;
                        margin-right:2%;
                        float:left;
                        margin-bottom:10px;
                        position:relative;
                    }
                    .imageUploadLast{
                        width:48%!important;
                        margin-left:2%;
                        float:left;
                        margin-bottom:10px;
                        position:relative;
                    }
                    .imageUpload button, .submit{
                        width:100%;
                        position,:absolute;
                        top:10px;
                        background:#b40202;
                        border:2px solid #333;
                        border-radius:5px;
                        padding:5%;
                        color:#fff;
                        cursor:pointer;
                    }
                    .imageUpload button:hover{
                        opacity:0.8;
                    }
                    .imageUpload input[type=file]{
                        position: absolute;
                        width:100%;
                        padding:5%;
                        top: 27px;
                        left: 0;
                        opacity: 0;
                        cursor:pointer;
                    }
                    .imageUpload img{
                        width:100%;
                    }
                    .form label p{
                        margin-bottom:0;
                    }
                    .form input[type=text], .form textarea{
                        width:100%;
                        padding:1% 3%;
                        border:1px  solid #ccc;
                        border-radius:5px;
                        clear:both;
                    }
                    .form textarea{
                        resize:none;
                    }
                    .submit{
                        width:50%;
                        position,:absolute;
                        top:10px;
                        background:#b40202;
                        border:2px solid #333;
                        border-radius:5px;
                        padding:2%;
                        color:#fff;
                        cursor:pointer;
                        margin-left:50%;
                        transform:translate(-50%,0);
                    }
                    .submit:hover{
                        opacity:0.8;
                    }
                `}</style>
            </div>
        )
    }
}

export default NewBandForm;