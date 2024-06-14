import { FormEvent, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

const TodoItem = () => {
  const { t } = useTranslation();
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedData = localStorage.getItem("todos");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
  return {
    t,
    todos,
    inputText,
    setInputText,
    handleSubmit,
    handleToggleTodo,
    handleDelete,
  };
};
export default TodoItem;
