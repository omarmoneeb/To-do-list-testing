import { ChangeEvent, FormEvent } from "react";
interface TodoFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  t: (key: string) => string;
}
const TodoForm = ({
  inputText,
  setInputText,
  handleSubmit,
  t,
}: TodoFormProps) => {
  return (
    <form id="form-style" onClick={handleSubmit}>
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        value={inputText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value)
        }
      />
      <button> {t("addtodo")}</button>
    </form>
  );
};
export default TodoForm;
