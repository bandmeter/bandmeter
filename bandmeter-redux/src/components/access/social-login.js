import React, { Component } from 'react';
import SocialButton from '../common/SocialButton';
import config from '../../config.json';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, AmazonLoginButton, InstagramLoginButton, LinkedInLoginButton, MicrosoftLoginButton } from "react-social-login-buttons";

class SocialLogin extends Component {


    socialLogin = (platform) =>{
    }

    handleSocialFailure = () =>{

    }

    render(){
        return (
            <div>
                <FacebookLoginButton onClick={this.socialLogin('Facebook')}><span>Acceder con Facebook</span></FacebookLoginButton>
                <GoogleLoginButton onClick={this.socialLogin('Google')}><span>Acceder con Google</span></GoogleLoginButton>
                <GithubLoginButton onClick={this.socialLogin('Github')}><span>Acceder con Github</span></GithubLoginButton>
                <TwitterLoginButton onClick={this.socialLogin('Twitter')}><span>Acceder con Twitter</span></TwitterLoginButton>
                <AmazonLoginButton onClick={this.socialLogin('Amazon')}><span>Acceder con Amazon</span></AmazonLoginButton>
                <InstagramLoginButton onClick={this.socialLogin('Instagram')}><span>Acceder con Intagram</span></InstagramLoginButton>
                <LinkedInLoginButton onClick={this.socialLogin('Linkedin')}><span>Acceder con Linkedin</span></LinkedInLoginButton>
                <MicrosoftLoginButton onClick={this.socialLogin('Microsoft')}><span>Acceder con Microsoft</span></MicrosoftLoginButton>
            </div>        
        )
    }
}

export default SocialLogin;