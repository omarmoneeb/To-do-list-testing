import { useState } from "react";
interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <h1>Todo App</h1>
      <label htmlFor="todo"></label>
      <input type="text" id="todo" value={inputText} />
      <button> Add Todo</button>
      <ul></ul>
    </div>
  );
};

export default TodoApp;
