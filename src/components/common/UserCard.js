import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const cardSource = {
    beginDrag(props) {
      return {
        text: props.text
      };
    }
  };

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
}

class UserCard extends Component{

    render(){

        const { classes, user } = this.props;

        console.log(user);

        return(
                <Card className={classes.card}>
                    <img className="cardImage" src={user.image} alt={user.fullname} />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                        {user.fullname}
                        </Typography>
                    </CardContent>
                    <style jsx>{`
                        .cardImage{float:left;margin-right:5px;width:50px;height:50px;overflow:hidden;}
                        .MuiPaper-root-12{margin-bottom:5px;}
                        .MuiCardContent-root-91,.MuiCardContent-root-105{float:left;width:calc(100% - 55px);padding:0;}
                        .MuiTypography-headline-48{font-size:1rem;line-height:1.2rem;margin-top:6px;}
                    `}</style>
                </Card>
        )
    }
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UserCard);