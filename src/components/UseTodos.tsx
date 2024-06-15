import { FormEvent, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { nanoid } from "nanoid";

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
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (inputText.trim() === "") return;
      const newTodo: Todo = {
        id: nanoid(),
        text: inputText,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    },
    [inputText, todos]
  );

  const handleToggleTodo = useCallback(
    (id: string) => {
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
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id: string) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    },
    [todos]
  );
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
