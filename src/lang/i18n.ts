import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          todoApp: "Todo App",
          addtodo: "Add Todo",
          delete: "Delete",
        },
      },
      es: {
        translation: {
          todoApp: "Aplicación de tareas pendientes",
          addtodo: "Agregar todo",
          delete: "Borrar",
        },
      },
      ar: {
        translation: {
          todoApp: "تطبيق المهام اليومية",
          addtodo: "أضف مهمة",
          delete: "مسح",
        },
      },
    },
  });

export default i18n;
