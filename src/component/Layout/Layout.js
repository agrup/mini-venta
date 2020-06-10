import React,{useState} from 'react';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// import { Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Sidebar from './menu/Index';
import NavBar from './nav/index';
import Body from './Body' 

import NewArticle from '../Article/NewArticle';
import Articles from '../Article/Articles';
import Clints from '../Clients/Client';


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
    {key:0, show:'Articulos',link:'/articulos'},
    {key:1, show:'Vender',link:'/vender'},
    {key:2, show:'Comprar',link:'/comprar'},
    {key:3, show:'Stock',link:'/stock'},
    {key:4, show:'Mensajes',link:'/mensajes'},
    {key:5, show:'Pedidos',link:'/pedidos'},
    {key:6, show:'Nuevo Articulo',link:'/new-article'},
    {key:7, show:'Cliente',link:'/Cliente'},
    {key:8, show:'Nuevo Cliente',link:'/new-client'},
    {key:9, show:'Order',link:'/new-order'},
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
                <Route path="/pedidos" exact component={Clints} />
                <Route path="/articulos" exact component={Articles} />
                <Route path="/new-article" exact component={NewArticle} />
              </Paper> 
            </Col>
        </Row>
        </Body>
    </div>
  );
}


export default Layout;