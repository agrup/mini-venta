import React, { useState } from 'react';

import { Button,Card,ListGroup } from "react-bootstrap";
// import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './NewClientForm.css';
import './Client.css';

import {Form} from 'react-bootstrap'

const NewClientForm = React.memo(props => {

    const [Name, setName] = useState('');
    const [City, setCity] = useState('');;
    const [TaxId,setTaxId] = useState('')
    const [Tel,setTel] = useState('')

  const submitHandler = event => {
    event.preventDefault();
    // console.log(enteredName,enteredcity,enteredTaxId)
    fetch('https://mini-venta.firebaseio.com/client.json',{
        method: 'POST',
        body: JSON.stringify({Name,City,TaxId}),
        headers:{'Content-Type':'aplication/json'}
    }).then(response => {
        console.log(response)
    }).catch(error => {
        alert(error);
    })
    //props.onAddclient({ Name: enteredName, city: enteredcity });
  };

  return (
    <form onSubmit={submitHandler}>
        <Card>
            <Card.Header>
                Cargar Nuevo Cliente
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
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Descripcion"
                        value={City}
                        onChange={event => {
                            setCity(event.target.value);
                        }}
                        />
                    <br />
                    <label>Telefono</label>
                    <Form.Control size="xl" type="text" placeholder="Tamaño" 
                    value={Tel}
                    onChange={event => {
                        setTel(event.target.value);
                    }}
                    />
                    <br />
                    <label>Cuil</label>
                    <Form.Control size="xl" type="text" placeholder="Tamaño" 
                        value={TaxId}
                        onChange={event => {
                            setTaxId(event.target.value);
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

export default NewClientForm;