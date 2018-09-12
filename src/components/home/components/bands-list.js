import React, { Component } from 'react';
import Band from './band';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { bandService } from '../../../services';

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

class BandsList extends Component{

    state = {
        bands: []
    }

    componentDidMount(){
        const { bands } = this.props;
        this.bandas = [];
        bands.forEach((band)=>{
            bandService.getById(band._id).then((res)=>{
                this.bandas.push(res);
            });
        });
        this.setState({bands: this.bandas});
    }

    render(){
        return(
            <div className="ListadoBandas">
                <p>{this.state.bands.length}</p>
                {this.state.bands.map((band)=>{
                   return <p>{band.name}</p>
                })}
            </div>
        )
    }
}

BandsList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(BandsList);