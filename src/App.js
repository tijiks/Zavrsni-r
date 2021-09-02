import React from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { FormTodo } from "./components/FormTodo/FormTodo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Ovo je primer",
      isDone: false
    }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo list</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <TodoItem
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
            /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;