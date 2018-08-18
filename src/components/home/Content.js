import React, { Component } from 'react';
import './Content.css';
import axios from 'axios';
import config from '../../config.json';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

let notifications = void 0;

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class Content extends Component {

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

    render(){
        const { classes } = this.props;

        return(
            <div className="homeContent"> 
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