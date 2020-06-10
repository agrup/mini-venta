import React,{useState} from 'react';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// import { Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Sidebar from './menu/menu';
import NavBar from './nav/index';
import Body from './Body' 

import Articles from '../Article/Articles';
import NewArticle from '../Article/NewArticle';
import Clients from '../Client/Clients';
import NewClient from '../Client/NewClient';


import './../../style/Layout.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: "100%",
      marginTop: `${theme.spacing(1)}px`,
    },
    nomargin:{
      display:'flex',
      flexWrap: 'wrap',
    },
    nopadding:{
      paddingRight:10,
      display: 'flex'
    },
  }),
);


const Layout = props =>  {
  
   const [sidebarOpen,setSidebarOpen] = useState(false);

    const menu = [
    {key:0, show:'Articulos',link:'/articles'},
    {key:1, show:'Vender',link:'/sell'},
    {key:2, show:'Comprar',link:'/buy'},
    {key:3, show:'Stock',link:'/stock'},
    {key:4, show:'Mensajes',link:'/message'},
    {key:5, show:'Pedidos',link:'/orders'},
    {key:6, show:'Nuevo Articulo',link:'/article/add'},
    {key:7, show:'Cliente',link:'/clients'},
    {key:8, show:'Nuevo Cliente',link:'/client/add'},
    {key:9, show:'Order',link:'/order/add'},
    {key:18, show:'Admin',link:'/admin'}
  ];
  const classes = useStyles();
  return (
    <div className="App">
        <NavBar style={{display: 'flex'}}/>
        <Body >
          <Row >
          
          <Col  xs={2} className={classes.nopadding} >

            <Sidebar menu={menu} />

          </Col>
          <Col  xs={10} >
            <Paper className={classes.paper}>
                <Route path="/clients" exact component={Clients} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/article/add" exact component={NewArticle} />
                <Route path="/client/add" exact component={NewClient} />
              </Paper> 
            </Col>
        </Row>
        </Body>
    </div>
  );
}


export default Layout;