import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),

  },
  wrapper:{
    wordWrap:'break-word',
    display:'flex',
    justifyContent:'flex-start',

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
    <Paper className={classes.root}  elevation={1}>
      <div className={classes.wrapper} >
    <Typography variant='h6' color='textSecondary'>
      {props.user}:
       </Typography>
       <Typography variant="h6" className={classes.message} color='textPrimary'>
         {props.message}
       </Typography>
       </div>
       <Typography variant='subtitle2' align='right'>
         23:00
       </Typography>
    </Paper>
  )
}

export default withStyles(styles)(Message);
