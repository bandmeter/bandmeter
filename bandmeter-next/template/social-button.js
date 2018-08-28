import React from 'react'
import SocialLogin from 'react-social-login'

const Button = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props}>
    { children }
    <style jsx>{`
    button{
        width:80%;
        backround:rgba(255,255,255,0.5);
        border: 1px solid #000;
        border-radius:10px;
        padding:10px;
        tex-align:center;
        margin:10px auto;
        font-size:15px;
        display:block;
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
  </button>
)

export default SocialLogin(Button)