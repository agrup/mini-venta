import React from 'react';

import './App.css';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";


//import Dashboard from '../component/Layout/Layout';
import Layout from './../component/Layout/Layout'


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}


export default App;
