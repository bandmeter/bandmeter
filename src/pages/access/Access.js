import React, { Component } from 'react';
import config from '../../config.json';
import FacebookProvider, { Login } from 'react-facebook';
import {TransitionMotion, spring} from 'react-motion';
import FadeIn from 'react-fade-in';
import { Redirect } from 'react-router';

import ModalWindow from '../../components/common/ModalWindow/ModalWindow';
import axios from 'axios';

import logo from './images/logo.png';
import './Access.css';

import RegisterForm from '../../components/access/register-form';

const leavingSpringConfig = {stiffness: 60, damping: 15};

class Access extends Component {

    state = {
        isLogged: false, 
        isConnected : false,
        fbid : 0,
        mouse: [], 
        now: 't' + 0
    };

    constructor(props){
        super(props);
        window.fbAsyncInit = function() {
            window.FB.init({
            appId      : config.fbAppId,
            cookie     : true,
            xfbml      : true,
            version    : '3.1'
            });
            
            window.FB.getLoginStatus((response) => {
                if(response.status === 'connected'){
                    window.state = {isConnected: true, fbid : response.authResponse.userID};
                }
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount(){
        if(window.state){
            this.setState(window.state);
        }
        let el = document.getElementsByClassName('logo');
        el[0].classList.add('show');
    }

    handleMouseMove = ({pageX, pageY}) => {
        // Make sure the state is queued and not batched.
        this.setState(() => {
          return {
            mouse: [pageX - 25, pageY - 25],
            now: 't' + Date.now(),
          };
        });
    };
    willLeave = (styleCell) => {
        return {
          ...styleCell.style,
          opacity: spring(0, leavingSpringConfig),
          scale: spring(2, leavingSpringConfig),
        };
    };
    handleTouchMove = (e) => {
        e.preventDefault();
        this.handleMouseMove(e.touches[0]);
    };

    handleResponse = (response) =>{
        console.log("Entra");
        this.toDataUrl(`https://graph.facebook.com/v3.1/${response.profile.id}/picture?access_token=${response.tokenDetail.accessToken}`, (myBase64) => {
            console.log(myBase64); // myBase64 is the base64 string
            console.log("Entra 2")
            localStorage.setItem('profileImage', myBase64);

            this.setState({isLogged: true});
          });
        localStorage.setItem('userData', JSON.stringify(response));
    }

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

    handleError = (error) =>{
        console.log("Entra");
        this.setState({message:"Ha habido un problema al hacer login.", type:"error"});
    }

    closeModal = () =>{
        this.setState({message:undefined});
    }
    render(){
        const {mouse: [mouseX, mouseY], now} = this.state;
        const styles = mouseX == null ? [] : [{
            key: now,
            style: {
                opacity: spring(1),
                scale: spring(0),
                x: spring(mouseX),
                y: spring(mouseY),
            }
        }];
        if(this.state.isLogged){
            return(<Redirect to="/" />);
        }
        return(
            <div>
                <TransitionMotion willLeave={this.willLeave} styles={styles}>
                    {circles =>
                    <div
                        onMouseMove={this.handleMouseMove}
                        onTouchMove={this.handleTouchMove}
                        className="demo7">
                        {circles.map(({key, style: {opacity, scale, x, y}}) =>
                        <div
                            key={key}
                            className="demo7-ball"
                            style={{
                            opacity: opacity,
                            scale: scale,
                            transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                            WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                            }} />
                        )}
                    </div>
                    }
            </TransitionMotion>
            {this.state.message ? <ModalWindow message={this.state.message} type={this.state.type} closeModal={this.closeModal} /> : '' }
            <section className="login">
                <FadeIn delay="1000" transitionDuration="1000">
                <img className="logo" src={logo} alt="Bandmeter.com" />
                </FadeIn>      
            </section>
            <FadeIn delay="1000" transitionDuration="1000">
            <div className="accessArea">
                <RegisterForm />
                <FacebookProvider appId={config.fbAppId}>
                    <Login
                    scope="email"
                    onResponse={this.handleResponse}
                    onError={this.handleError}
                    >
                    <button className="btn btn-facebook"><i className="fab fa-facebook-square"></i><span>Login via Facebook</span></button>
                    </Login>
                </FacebookProvider> 
            </div>
            </FadeIn>
        </div>
        )
    }

}

export default Access;