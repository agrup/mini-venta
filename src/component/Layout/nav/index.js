import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';
import { Nav,Navbar,NavDropdown} from 'react-bootstrap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navi:{
      paddingRight: 40,
      background: 'linear-gradient(45deg, #FFEEAA 90%, #000000 30%)'
    }
  }),
);

const NavBar = () => {
    const classes = useStyles();
    return(
        <Navbar className={classes.navi}>
        <Navbar.Brand href="/">Macetas Lujan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;