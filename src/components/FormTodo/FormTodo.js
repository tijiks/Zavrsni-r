import React from "react";
import { Form, Button } from 'react-bootstrap';
import './FormTodo.css';

export const FormTodo = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="formGroup">
        <Form.Label>Add Todo</Form.Label>
        <Form.Control className="input"key=" " type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="outline-dark" type="submit">
        Submit
      </Button>
    </Form>
    );
  }