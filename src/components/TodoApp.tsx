import { FormEvent, useState } from "react";
interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputText.trim() === "") return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputText,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  }

  function handleToggleTodo(id: string) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onClick={handleSubmit}>
        <label htmlFor="todo"></label>
        <input
          type="text"
          id="todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button> Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
