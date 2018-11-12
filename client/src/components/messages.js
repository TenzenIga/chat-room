import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Message from './message';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    maxWidth:'calc(100% - 240px)',
    marginTop:65,
    [theme.breakpoints.down('xs')]: {
      maxWidth:'100%',
    },
  }
});

const messages = [
  {message:'hey', user:'zeta'},
  {message:'sup', user:'king'},
  {message:'how are you?', user:'bro'},
  {message:'I love react', user:'zeta'},
  {message:'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee boi!', user:'king'}
]


const Messages = (props) => {
  const {classes} = props;
  const allMessages = messages.map((msg, key) =>{
    return <Message message={msg.message} user={msg.user} key={key} />
})
  return (
    <section className={classes.root}>
      {allMessages}
      </section>
  )
}

export default withStyles(styles)(Messages)
