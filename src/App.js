import "./App.css";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoCounter } from "./TodoCounter";
import { TodoCreateButton } from "./TodoCreateButton";
import { TodoNew } from "./TodoNew";
import { TodoSearch } from "./TodoSearch";

var arrayTodo = [
  { text: "Hacer el almuerzo", completed: true },
  { text: "Terminar curso basico de react", completed: false },
  { text: "Terminar asignaciones de TNT", completed: false },
];
var completed = arrayTodo.filter((o) => o.completed === true).length;
var total = arrayTodo.length;

function App() {
  return (
    <>
      <div>
        <TodoNew />
      </div>
      <div>
        <br />
        <TodoCounter completed={completed} total={total} />
        <br />
        <TodoSearch />
        <TodoList>
          {arrayTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <TodoCreateButton />
      </div>
    </>
  );
}

export default App;
