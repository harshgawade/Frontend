import React from 'react';
import {Todowork} from "../components/Todowork";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h2 className=' my-3' >My ToDos List</h2>

      {
        props.todos.length ===0 ? "Todos are not Present":
        props.todos.map((todo) => {
   
          return (
          <>
          <Todowork todo={todo} key={todo.done}  onDelete={props.onDelete}/> <hr />
          </>
        );
        })}


</div>
)
}
        