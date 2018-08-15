import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme } from '@material-ui/core/styles';
import './register-form.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    color:"#ffffff"
  },
  button: {
    margin: theme.spacing.unit,
    width:"100%"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class RegisterForm extends React.Component {
  state = {
    legals: false
  };

  handleChange = name => event => {
    if(name === 'legals'){
      this.setState({
        [name]: event.target.checked
      });
    }else{
      this.setState({
        [name]: event.target.value
      });
    }
  };

  validate = () =>{
    if(this.state.legals){
      
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <h3>Regístrate</h3>
        <TextField
          required
          id="email"
          label="Correo electrónico"
          className={classes.textField}
          type="email"
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
        />
        <TextField
          required
          id="password"
          label="Contraseña"
          type="password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange("password")}
          margin="normal"
        />
        <TextField
          required
          id="passwordConfirmation"
          label="Confirma tu contraseña"
          type="password"
          className={classes.textField}
          value={this.state.passwordConfirmation}
          onChange={this.handleChange("passwordConfirmation")}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.legals}
              onChange={this.handleChange('legals')}
              value="legals"
            />
          }
          label="He leido y acetp las condiciones legales"
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={this.validate}>
          Registrar
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
