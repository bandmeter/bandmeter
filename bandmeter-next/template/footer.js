import React, { Component } from 'react';
import { Link } from '../routes';
class Footer extends Component{

    render(){
        return(
            <footer>
                <ul className="menu">
                    <li>
                        Bandmeter © 2018
                    </li>
                    <li>
                        <Link route="privacy-policy">
                            <a>Política de privacidad</a>
                        </Link>
                    </li>
                        <li>
                        <Link route="cookies-policy">
                            <a>Política de cookies</a>
                        </Link>
                    </li>
                </ul>
                <style jsx>{`
                    footer{
                        position:fixed;
                        bottom:0;
                        width:100%;
                        padding:0;
                        text-align:center;
                        background:#b40202;
                        color:#fff;
                        -webkit-box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.75);
                        box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.75);
                    }
                    footer ul li{
                        list-style:none;
                        display:inline;
                    }
                    footer ul li:first-child{
                        border-left:none;
                        padding-right:10px;
                    }
                    footer ul li a{
                        color:#fff;
                        text-decoration:none;
                        padding: 1px 10px 4px;
                        line-height:10px;
                    }
                    footer ul li a:hover{
                        background: rgba(0,0,0,0.2);
                        border: 1px solid rgba(0,0,0,0.2);
                        padding: 1px 9px 4px;
                    }
                    footer ul{
                        margin-left:50%;
                        transform: translate(-50%)
                    }
                `}</style>
            </footer>
        )
    }
}

export default Footer;