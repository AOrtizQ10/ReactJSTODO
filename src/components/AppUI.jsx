
import { TodoItem } from "./TodoItem/TodoItem"
import { TodoList } from "./TodoList/TodoList";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoCreateButton } from "./TodoCreateButton/TodoCreateButton";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodosLoading } from "./TodosLoading/TodosLoading";
import { TodosError } from "./TodosError/TodosError";
import { TodosEmpty } from "./TodosEmpty/TodosEmpty";
import { TodoContext } from "../context/TodoContext/TodoContext";
import { TodoForm } from "./TodoForm/TodoForm";
import { Modal } from "./Modals/Modal";
import React from "react";


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty error={error} />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoCreateButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
