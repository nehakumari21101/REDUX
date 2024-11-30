import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import AddForm from './AddForm';
import { deleteTodo } from '../features/todo/todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleClick = (id) => {
    console.log("delete");
    dispatch(deleteTodo(id));
  }
  return (
    <>
      <h2>Todo List App</h2>
      <AddForm/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={ () => handleClick(todo.id)}style={{marginLeft:"10px", marginBottom:"10px"}}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo;
