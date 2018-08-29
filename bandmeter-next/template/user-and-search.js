import React, { Component } from 'react';
import Menu from './menu';

class UserAndSearch extends Component{

    state = {
        showMenu : false
    }

    handleSearch = (event) =>{
        this.setState({search: event.target.value});
    }

    handleAvatar = () =>{
        this.setState({showMenu: !this.state.showMenu});
    }

    render(){
        const { user } = this.props;
        
        return(
            <div className="container">
            {this.state.showMenu && <Menu handleMenu={this.handleMenu} />}
                <form>
                    <input type="text" name="search" onChange={this.handleSearch} placeholder="Buscar" />
                </form>
                <button className="avatar"><img src={user.image} alt={user.fullname} onClick={this.handleAvatar}/></button>
            <style jsx>{`
                .container{
                    float:right;
                }
                form {
                    display:inline;
                    margin-top:3px;
                }
                form input{
                    background:#333;
                    border:1px solid #fff;
                    border-radius:5px;
                    padding:5px 10px;
                    font-size:12px;
                    margin:10px;
                    color:#fff;
                }
                form input:focus{
                    outline:none;
                }
                button{
                    border:1px solid #333;
                    background:none;
                    padding:0;
                    border-radius:50%;
                    overflow:hidden;
                    width:50px;
                    height:50px;
                    display:inline;
                    cursor:pointer;
                    opacity:0.8;
                    float:right;
                }
                button:hover{
                    opacity:1;
                }
                button:focus{
                    outline:none;
                }
            `}</style>            
            </div>
        )
    }
}

export default UserAndSearch;