interface TodoListProps {
  todos: { id: string; text: string; isDone: boolean }[];
  handleToggleTodo: (id: string) => void;
  handleDelete: (id: string) => void;
  t: (key: string) => string;
}
const TodoList = ({
  todos,
  handleToggleTodo,
  handleDelete,
  t,
}: TodoListProps) => {
  return (
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
  );
};
export default TodoList;
