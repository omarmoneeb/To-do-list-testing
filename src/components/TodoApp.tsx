import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

const TodoApp = () => {
  const { t } = useTranslation();

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

  function handleDelete(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <h1>{t("todoApp")}</h1>
      <form id="form-style" onClick={handleSubmit}>
        <label htmlFor="todo"></label>
        <input
          type="text"
          id="todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button> {t("addtodo")}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className="items" key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>{t("delete")}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
