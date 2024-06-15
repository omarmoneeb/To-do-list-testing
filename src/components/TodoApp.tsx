import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodos from "./UseTodos";

const TodoApp = () => {
  const {
    t,
    todos,
    inputText,
    setInputText,
    handleSubmit,
    handleToggleTodo,
    handleDelete,
  } = useTodos();

  return (
    <div>
      <h1>{t("todoApp")}</h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
        t={t}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDelete={handleDelete}
        t={t}
      />
    </div>
  );
};
export default TodoApp;
