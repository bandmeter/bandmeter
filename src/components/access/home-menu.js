import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home-menu.css';

class HomeMenu extends Component {
    render(){
        return(
            <div>
                <ul className="menu-home">
                    <li>
                        <Link to="/sign-in">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Registrarse</Link>
                    </li>
                    <li className="clr"></li>
                </ul>
            </div>
        )
    }
}

export default HomeMenu;