import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme } from '@material-ui/core/styles';
import './register-form.css';

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
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <h3>Regístrate</h3>
        <TextField
          inputProps={{style:{color:"#ffffff"}}}
          style={{color:"#ffffff"}}
          required
          id="name"
          label="Nombre"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          color="secondary"
        />
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
        <Button variant="contained" color="primary" className={classes.button}>
          Send
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
