import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import  { Redirect } from 'react-router';

import './Header.css';
import logo from './images/logo.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    open:false,
    redirect: undefined
  };

  constructor(props){
      super(props);
      this.userData = JSON.parse(sessionStorage.getItem('user-data'));
  }

  componentDidMount(){
      this.setState({userData: this.userData});
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (link) => {
    this.setState({ anchorEl: null });
    if(link){
      this.setState({redirect: true, link: link});
    }
  };

  handleSearch = (event) =>{
    this.setState({search: event.target.value});
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.link} />
    }
  }
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
      {this.renderRedirect()}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <a href="/">
              <img className="header-logo" src={logo} alt="Bandmeter" />
              </a>
            </Typography>
            <input className="searchInput" placeholder="Buscar" type="text" onChange={this.handleSearch} />
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <img src={this.userData.image} alt={this.userData.fullname} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() =>{this.handleClose('/profile')}}>Mi perfil</MenuItem>
                  <MenuItem onClick={() => {this.handleClose('/bands')}}>Mis bandas</MenuItem>
                  <MenuItem onClick={() =>{this.handleClose('/notifications')}}>Notificaciones</MenuItem>
                  <MenuItem onClick={()=>{this.handleClose('/account')}}>Mi cuenta</MenuItem>
                  <MenuItem onClick={()=>{this.handleClose('/sign-out')}}>Salir</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);