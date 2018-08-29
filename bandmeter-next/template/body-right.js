import React, { Component } from 'react';
import SocialButton from './social-button';
import axios from 'axios';
import config from '../config.json';
import Router from 'next/router';

class BodyRight extends Component{
    handleSocialLogin = (response) => {
        let user = {
            fbId: response._profile.id,
            email: response._profile.email
        };

        axios.post(`${config.apiBaseUrl}/user/login-fb`, user)
             .then(res =>{
                 if(res.data === 'ko'){
                    this.setState({message: "Esta cuenta de Facebook no está registrada en el sistema. ¿Quieres registrarte con ella?", type: "fb-register"});
                    //Esto es para el registro
                    this.toDataUrl(`https://graph.facebook.com/v3.1/${response.profile.id}/picture?access_token=${response.tokenDetail.accessToken}`, (myBase64) => {
                        this.user = {
                            fullname: response.profile.name,
                            email: response.profile.email,
                            image: myBase64,
                            fbId: response.profile.id
                        }
                    });
                 }else{
                    sessionStorage.setItem('user-data', JSON.stringify(res.data));
                    Router.push('index');
                 }
             })
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