import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1300,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
   marginRight: 20,
   [theme.breakpoints.up('sm')]: {
     display: 'none',
   },
 },
});

class Header extends React.Component {
  constructor(props){
    super(props)

  }

  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  }

  render(){
    const { classes, nickname, socket} = this.props;
    return (
      <AppBar position="fixed" className={classes.root} >
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow} >
        Chat Room {socket.id}
            </Typography>
            <Typography variant="h6" color="inherit"  >
              {nickname}
            </Typography>
             <IconButton
               color="inherit"
               aria-label="Open drawer"
               onClick={this.handleDrawerToggle}
               className={classes.menuButton}
             >
               <MenuIcon />
             </IconButton>
           </Toolbar>
      </AppBar>
      )
    }
  }
export default withStyles(styles, { withTheme: true })(Header);
