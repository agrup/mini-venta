import React, { useState } from 'react';

import { Button,Card,ListGroup } from "react-bootstrap";
// import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './NewArticleForm.css';
import './Article.css';

import {Form} from 'react-bootstrap'

const NewArticleForm = React.memo(props => {

    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');;
    const [Size,setSize] = useState('')

  const submitHandler = event => {
    event.preventDefault();
    // console.log(enteredName,entereddescription,enteredSize)
    fetch('https://mini-venta.firebaseio.com/article.json',{
        method: 'POST',
        body: JSON.stringify({Name,Description,Size}),
        headers:{'Content-Type':'aplication/json'}
    }).then(response => {
        console.log(response)
    }).catch(error => {
        alert(error);
    })
    //props.onAddarticle({ Name: enteredName, description: entereddescription });
  };

  return (
    <form onSubmit={submitHandler}>
        <Card>
            <Card.Header>
                Cargar Nuevo Articulo
            </Card.Header>
            <Card.Body>

                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control size="text" type="text" placeholder="Nombre" 
                        value={Name}
                        onChange={event => {
                            setName(event.target.value);
                        }}
                        />
                    <br />
                    <Form.Label>Descipcion</Form.Label>
                    <Form.Control type="text" placeholder="Descripcion"
                        value={Description}
                        onChange={event => {
                            setDescription(event.target.value);
                        }}
                        />
                    <br />
                    <label>Tamaño</label>
                    <Form.Control size="xl" type="text" placeholder="Tamaño" 
                    value={Size}
                    onChange={event => {
                        setSize(event.target.value);
                    }}
                    />
                </Form.Group>
            </Card.Body>
            <Card.Footer>
                <div className="ingredient-form__actions">
                    <button type="submit">Agregar</button>
                    {props.loading && <LoadingIndicator />}
                </div>
            </Card.Footer>
        </Card>

    </form>
  );
});

export default NewArticleForm;