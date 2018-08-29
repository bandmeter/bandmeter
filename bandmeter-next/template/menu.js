import React, { Component } from 'react';
import { Link } from '../routes';

class Menu extends Component{

render(){
    return(
        <div className="menu-container" onClick={this.props.handleMenu}>
            <div className="menu">
                <Link route="profile"><a>Perfil</a></Link>
                <Link route="setup"><a>Configuración</a></Link>
                <Link route="bands"><a>Mis bandas</a></Link>
                <Link route="notifications"><a>Mis notificaciones</a></Link>
            </div>
            <style jsx>{`
                    .menu{
                        position:absolute;
                        top:60px;
                        right:25px;
                        background:#fff;
                        border:1px solid #000;
                        border-radius:10px;
                    }
                    .menu a{
                        display:block;
                        color:#666;
                        text-decoration:none;
                        padding:5px 20px;
                        border-bottom:1px solid #000;
                    }
                    .menu a:first-child{
                        border-radius:5px 5px 0 0;
                    }
                    .menu a:last-child{
                        border-bottom:none;
                        border-radius:0 0 5px 5px;
                    }
                    .menu a:hover{
                        color:#fff;
                        background:#333;
                    }
                `}</style>
        </div>
    )
}
}

export default Menu;