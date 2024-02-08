import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Slider from "./components/Slider/Slider";
import { slides } from "./utils/slides";
import { Container } from "react-bootstrap";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [
    { id: 1, text: "Hit the gym", status: true, checked: false },
    { id: 2, text: "Pay bills", status: true, checked: false },
    { id: 3, text: "Meet George", status: true, checked: false },
    { id: 4, text: "Buy eggs", status: true, checked: false },
    { id: 5, text: "Read a book", status: true, checked: false },
    { id: 6, text: "Organize office", status: false, checked: false },
  ];

  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

      <Slider
        slides={slides}
        // loop={true}
        navs
        pags
        // auto={false}
        // stopMouseHover={true}
      />
    </Container>
  );
}

export default App;
