import React from 'react'
import PropTypes from 'prop-types'
import Message from './message';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    maxWidth:'calc(100% - 240px)',
    marginTop:65,
    marginBottom:65,
    maxHeight:'calc(100% - 240px)',
    [theme.breakpoints.down('xs')]: {
      maxWidth:'100%',
    },
  },
  typingUsers:{
    display:'flex',
  }

});




const Messages = (props) => {
  const {classes, messages, typingUsers} = props;

  return (
    <List className={classes.root}>
      {
        messages.length > 0 && messages.map((msg, key) => <Message message={msg.message} user={msg.nickname} time={msg.time} key={key} />)
      }
      {
        typingUsers.length > 0 && typingUsers.map((user, key) => {
          return <ListItem className={classes.typingUsers} key={key}>
        <ListItemText variant='h6' color='textSecondary'
          primary={`${user} is typing...`}
           />
        </ListItem>
      })
      }

    </List>
  )
}

Messages.propTypes = {
  classes:PropTypes.object.isRequired,
  messages:PropTypes.array.isRequired,
  typingUsers:PropTypes.array.isRequired
};

export default withStyles(styles)(Messages)
