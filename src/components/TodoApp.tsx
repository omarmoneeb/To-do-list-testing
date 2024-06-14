import item from "./TodoItem";

const TodoApp = () => {
  const {
    t,
    todos,
    inputText,
    setInputText,
    handleSubmit,
    handleToggleTodo,
    handleDelete,
  } = item();

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
