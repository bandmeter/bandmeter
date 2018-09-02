import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class LegalsCheck extends Component{
    state = {
        legals: false
      };
    
    handleChange = name => event => {
        if(name === 'legals'){
          this.setState({
            [name]: event.target.checked
          });
        }
        console.log(this.props.handleChange);
        this.props.handleChange('legals');
    };

    render(){
        return(
            <FormControlLabel
                control={
                <Switch
                    checked={this.state.legals}
                    onChange={this.handleChange('legals')}
                    value="legals"
                />
                }
                label="He leido y acepto las condiciones legales"
            />
        )
    }
}

export default LegalsCheck;