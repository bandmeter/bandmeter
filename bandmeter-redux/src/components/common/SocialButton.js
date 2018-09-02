import React from 'react'
import SocialLogin from 'react-social-login'
import { FacebookLoginButton } from "react-social-login-buttons";

const Button = ({ children, triggerLogin, ...props }) => (
    () =>{if(this.props.provider == 'facebook') return <FacebookLoginButton onClick={triggerLogin} {...props} />}
)

export default SocialLogin(Button)