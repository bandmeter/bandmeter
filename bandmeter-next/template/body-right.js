import React, { Component } from 'react';
import SocialButton from './social-button';
import axios from 'axios';
import config from '../config.json';
import Router from 'next/router';

class BodyRight extends Component{
    toDataUrl = (url, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            const reader = new FileReader();
            reader.onloadend = () => {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };

    handleSocialLogin = (response) => {
        let user = {
            fbId: response._profile.id,
            email: response._profile.email
        };

        axios.post(`${config.apiBaseUrl}/user/login-fb`, user)
             .then(res =>{
                 if(res.data === 'ko'){
                    //Esto es para el registro
                    this.toDataUrl(`https://graph.facebook.com/v3.1/${response._profile.id}/picture?access_token=${response._token.accessToken}`, (myBase64) => {
                        this.user = {
                            fullname: response.profile.name,
                            email: response.profile.email,
                            image: myBase64,
                            fbId: response.profile.id
                        }
                        this.registerWithFacebook();
                    });
                 }else{
                    sessionStorage.setItem('user-data', JSON.stringify(res.data));
                    Router.reload('/');
                 }
             })
    }

    registerWithFacebook = () =>{
        axios.post(`${config.apiBaseUrl}/user/register-fb`, this.user)
             .then(res =>{
                 if(res.status === 200){
                    sessionStorage.setItem('user-data',JSON.stringify(res.data));
                    Router.reload('/');
                 }
             });
    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
    }

    render(){
        return(
            <div className="bodyRight">
            <h2>O accede a la plataforma con tu red social favorita.</h2>
                <SocialButton
                    provider='facebook'
                    appId='734905063269553'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Login with Facebook
                </SocialButton>
            <style jsx>{`
                .bodyRight{
                    padding:10px;
                    border-radius:10px;
                    width:35%;
                    margin:0 5%;
                    display:inline-block;
                    position:absolute;
                    top:130px;
                }
                h2{
                    color:#fff;
                }
            `}</style>
            </div>
        )
    }
}

export default BodyRight;

/*
<SocialButton
    provider='instagram'
    appId='6db90c4b9cda4313b8c55be4799b1dfd'
    onLoginSuccess={this.handleSocialLogin}
    onLoginFailure={this.handleSocialLoginFailure}>
        Login with Instagram
</SocialButton>
<SocialButton
                    provider='google'
                    appId='bandmeter-1039'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Login with Google
                </SocialButton>
                <SocialButton
                    provider='linkedin'
                    appId='7700jpk1ubefgp'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Login with Linkedin
                </SocialButton>
*/