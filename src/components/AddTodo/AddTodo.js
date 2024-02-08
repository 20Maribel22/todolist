import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, Button, Form } from "react-bootstrap";
import "./AddTodo.css";

function AddTodo({ todos, setTodos }) {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          text: value,
          status: true,
        },
      ]);
      console.log(todos);
      setValue("");
    }
  };

  return (
    <Row>
      <Col className="add__todo">
        <Form.Control
          placeholder="Title..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="btn" onClick={saveTodo}>
          Добавить
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
