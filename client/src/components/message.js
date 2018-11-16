import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = theme => ({
    root: {
    ...theme.mixins.gutters(),

    },
    wrapper:{
    display:'flex',

    },
    message:{
    wordWrap:'break-word',
    whiteSpace:'pre-line',
    maxWidth:'calc(100% - 40px)',
    },
  });

const Message = (props) => {
  const { classes } = props;
  return (
    <ListItem className={classes.root}>
    <ListItemText variant='h6' color='textSecondary'
      primary={`${props.user}: ${props.message}`}
      secondary={props.time} />
    </ListItem>
  )
}

Message.propTypes = {
  classes:PropTypes.object.isRequired,
  message:PropTypes.string.isRequired,
  user:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired
};

export default withStyles(styles)(Message);
