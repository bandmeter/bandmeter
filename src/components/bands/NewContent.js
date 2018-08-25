import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import UserCard from '../common/UserCard';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    demo: {
      height: 500,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
      card: {
        maxWidth: 345,
      },
      media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: 'cover',
      },
  });

class NewContent extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    state = {
        direction: 'column',
        justify: 'center',
        alignItems: 'center',
    };

    handleFile = (event) =>{
        console.log(event.target.value);
    }
    handleForm = key => (event, value) => {
        this.setState({
          [key]: value,
        });
      };
    
    render() {
        const { classes } = this.props;
        const { alignItems, direction, justify } = this.state;
    
        return (
          <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={16}
              className={classes.demo}
              alignItems={alignItems}
              direction={direction}
              justify={justify}
            >
                <Grid item>
                    <Paper className={classes.paper}>
                    <Typography variant="headline" component="h3">
                        Crea una nueva banda.
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="name"
                        name="name"
                        label="Nombre de la banda"
                        placeholder="Escribe el nombre de la banda"
                        className={classes.textField}
                        margin="normal"
                        onChange={this.handleForm('name')}
                        value={this.state.name}
                    />
                    <Typography variant="normal" component="p">
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="band-logo"
                            type="file"
                            onChange={this.handleFile}
                        />
                        <label htmlFor="band-logo">
                            <Button variant="contained" component="span" className={classes.button}>
                            Sube el logo de la banda
                            <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                        </label>
                    </Typography>
                    <Typography variant="normal" component="p">
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="band-image"
                            type="file"
                            onChange={this.handleFile}
                        />
                        <label htmlFor="band-image">
                            <Button variant="contained" component="span" className={classes.button}>
                            Sube una imagen de la banda
                            <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                        </label>
                    </Typography>
                    </form>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>
                        <UserCard user={this.props.user} />
                    </Paper>
                </Grid>                    
            </Grid>
          </Grid>
      </Grid>
    );
  }
}

NewContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewContent);