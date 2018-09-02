import React, { Component } from 'react';
import './Content.css';
import axios from 'axios';
import config from '../../config.json';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Redirect } from 'react-router';

let notifications = void 0;

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
  });

class Content extends Component {

    state = {
        redirect: false
    };

    constructor(props){
        super(props);
        axios.get(`${config.apiBaseUrl}/notifications/${props.user._id}`)
             .then(res =>{
                if(res.data.length > 0){
                    notifications = res.data.map((notification)=>{

                    });
                }else{}
             });

    }

    createNewBand = () =>{
        this.setState({redirect: true, link: "/bands/new"});
    }
    
    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to={this.state.link} />;
        }
    }

    render(){
        const { classes } = this.props;

        return(
            <div className="homeContent"> 
                {this.renderRedirect()}
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Tus notificaciones.
                    </Typography>
                    <Divider />
                    {notifications !== void 0 ? notifications :
                    <Typography component="p">
                        Aún no tienes niguna notificación.
                    </Typography> }
                </Paper>
                <Divider />
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Tus bandas.
                        <IconButton className={classes.button} onClick={this.createNewBand}>
                            <Icon className={classes.iconHover} color="disabled" style={{ fontSize: 30 }}>
                                add_circle
                            </Icon>
                        </IconButton>
                    </Typography>
                    <Divider />
                    {this.props.user.bands.length > 0 ? notifications :
                    <Typography component="p">
                        Aún no tienes niguna banda.
                    </Typography> }
                </Paper>
            </div>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Content);