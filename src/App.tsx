import { ChangeEvent } from "react";
import TodoApp from "./components/TodoApp";
import { useTranslation } from "react-i18next";
type Language = {
  [key: string]: { nativeName: string };
};
function App() {
  const lngs: Language = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
    ar: { nativeName: "عربي" },
  };
  const { i18n } = useTranslation();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let lg: string = e.target.value;
    i18n.changeLanguage(lg);
  };
  return (
    <>
      <div>
        <select onChange={(e) => handleChange(e)}>
          {Object.keys(lngs).map((lng) => (
            <option
              key={lng}
              value={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
            >
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>
      </div>
      <TodoApp />
    </>
  );
}
export default App;
