import React from 'react'
import PropTypes from 'prop-types'
import JoinRoom from './joinRoom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width:'100%',
    maxWidth: 360,

},
  drawerPaper: {
    width: drawerWidth,
    paddingTop:10,

    [theme.breakpoints.up('sm')]: {
      marginTop:64,
      }
  },
  content: {
    flexGrow: 1,
  },
});

class Sidebar extends React.Component {
  constructor(props){
    super(props)

  }

  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.root}>
        <List>
          <li>
            <JoinRoom joinRoom={this.props.joinRoom} />
          </li>
  </List>
<Divider />
<List subheader={<ListSubheader>Users</ListSubheader>}>
<Divider />
<ListItem>
<ListItemText primary='Zeta' />
</ListItem>
<ListItem>
<ListItemText primary='King' />
</ListItem>



</List>
</div>
    );

    return (
      <div className='sidebar'>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              anchor="right"
              container={this.props.container}
              variant="temporary"
              open={this.props.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              anchor="right"
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}


export default withStyles(styles)(Sidebar);
