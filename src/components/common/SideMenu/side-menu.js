import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';

const drawerWidth = 240;

const options = [
    'Jamrooms',
    'Tus bandas',
    'Notificaciones',
  ];

const styles = theme => ({
        root: {
          flexGrow: 1,
        },
        appFrame: {
          height: 430,
          zIndex: 1,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          width: '100%',
        },
        appBar: {
          position: 'absolute',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        'appBarShift-left': {
          marginLeft: drawerWidth,
        },
        'appBarShift-right': {
          marginRight: drawerWidth,
        },
        menuButton: {
          marginLeft: 12,
          marginRight: 20,
        },
        hide: {
          display: 'none',
        },
        drawerPaper: {
          position: 'relative',
          width: drawerWidth,
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          ...theme.mixins.toolbar,
        },
        content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing.unit * 3,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        'content-left': {
          marginLeft: -drawerWidth,
        },
        'content-right': {
          marginRight: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        'contentShift-left': {
          marginLeft: 0,
        },
        'contentShift-right': {
          marginRight: 0,
        },
      });

let link = '';

class SideMenu extends Component{
    state = {
        open: this.props.open,
        anchor: 'left'
    }
    constructor(props){
        super(props);
    }

    handleMenuItemClick = (event,index) =>{
      switch(index){
        case 0:
          link="/jamrooms";
          break;
        case 1:
          link = "/bands";
          break;
        case 2:
          link ="/notifications";
          break;
      }
      this.props.onChange(link);
    }

    render(){
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <Drawer
                variant="persistent"
                open={this.props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
            <div className={classes.toolbar} />
            <List>
{options.map((option, index) => (
    <MenuItem
      key={option}
      disabled={index === this.state.selectedIndex}
      selected={index === this.state.selectedIndex}
      onClick={event => this.handleMenuItemClick(event, index)}
    >
      {option}
    </MenuItem>
  ))}
            </List>
            <Divider />
          </Drawer>
        )
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };    

export default withStyles(styles, { withTheme: true })(SideMenu);
