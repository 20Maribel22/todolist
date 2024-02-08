import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
  const [filtered, setFiltered] = useState(todos);
  const [show, setShow] = useState(false);

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todos);
    } else {
      let newTodo = [...todos].filter((todo) => todo.status === status);
      setFiltered(newTodo);
    }
  };

  const chekboxTodo = (id) => {
    const newTodo = [...todos].filter((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(newTodo);
    setShow(true);
  };

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodo);
    localStorage.clear();
    console.log(id);
  };

  const statusTodo = (id) => {
    const newTodo = [...todos].filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <div className="todo">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="list__items">
            <div className={!todo.status ? "close" : ""}>{todo.text}</div>
            <div>
              <input
                type="checkbox"
                value={todo.text}
                style={{ margin: "0 10px" }}
                checked={todo.checked}
                onChange={() => chekboxTodo(todo.id)}
              />
              {show && (
                <>
                  <Button
                    size="sm"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button
                    className="btn"
                    size="sm"
                    onClick={() => statusTodo(todo.id)}
                  >
                    {todo.status ? (
                      <FontAwesomeIcon icon={faLock} />
                    ) : (
                      <FontAwesomeIcon icon={faLockOpen} />
                    )}
                  </Button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
