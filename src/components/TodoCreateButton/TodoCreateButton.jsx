import React from 'react';
import './TodoCreateButton.css';
import { TodoContext } from '../../context/TodoContext/TodoContext';

function TodoCreateButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button
        className="CreateTodoButton"
        onClick={() => {setOpenModal(state => !state)}} 
    >+</button>
  );
}

export { TodoCreateButton };