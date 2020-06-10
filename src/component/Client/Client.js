import React,{useState, Component} from 'react'

import { Button,Card,ListGroup } from "react-bootstrap";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// const Client = props => {
class Client extends Component {

    render(){
        return(
            <Card >
                <Card.Header>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={this.props.name} src="/broken-image.jpg" >
                                </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.props.name}  />
                        <ListItemText secondary={this.props.city}  />
                        <ListItemText primary={this.props.taxId}  />           
                        <ListItemText primary={this.props.tel}  />
                    </ListItem>
                </Card.Header>
            </Card>
        )
    }
}

export default Client;