import React from 'react';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { Todos } from './components/Todos';
import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Are you sure of todo", todo);

    setTodos(todos.filter((e) => {

      return e !== todo;
    }));

    localStorage.setItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("add todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);

  }

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])

  return (
    
      <Router>
        <Navbar title='ToDos' />
        <Switch>
          <Route  exact path="/" render={() => {
            return( 
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
            }}>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        
        <Footer />
      </Router>
  );
}

export default App;
