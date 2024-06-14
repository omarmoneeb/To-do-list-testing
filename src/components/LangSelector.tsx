import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const LangSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
    </select>
  );
};
export default LangSelector;
