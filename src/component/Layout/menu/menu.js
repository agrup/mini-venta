import React from 'react'
import clsx from 'clsx';

import {Link} from 'react-router-dom'

// import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar:{
        background:'#e21d27'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
  }),
);

const Sidebar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = () => {
        setOpen(!open);

    }

    return(
        <div
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
             role="presentation"  
             onClick={toggleDrawer}
        >
            <div className={classes.toolbar}>
                <IconButton >
                    {!open ? <ChevronRightIcon />:<ChevronLeftIcon /> } 
                </IconButton>
            </div>
            <List>
            {props.menu.map((menu, index) => (
                <ListItem button key = {menu.key}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link  to = {menu.link} >
                                        {/* {menu.show}                                          */}
                    <ListItemText primary={menu.show} />
                </Link>
                {/* <ListItemText primary={menu.show} /> */}
                </ListItem>
            ))}
            </List>
        </div>

    )   
}

export default Sidebar;
        // <List disablePadding dense className="classes.root">
        //         <ListItemText className={classes.drawerHeader}
        //             className={classes.header} 
        //             onClick={props.toggleSidebar}
        //             className="sidebar-toggle"> Menu </ListItemText>
        //         {props.menu.map( (menu,index) => {
        //             return(
        //                 <ListItem key = {menu.key} button  >
        //                     <ListItemText > 
        //                         <Link  to = {menu.link} >
        //                                 {menu.show}                                         
        //                         </Link>
        //                     </ListItemText>
        //                 </ListItem>
        //             )
        //         })}
        // </List>