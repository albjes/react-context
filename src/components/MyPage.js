import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import NewExercise from "./NewExercise";
import { useState } from "react";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar",
    buttonLogout: "Salir",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [languaje, setLanguaje] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[languaje]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguaje("es");
      setTexts(translations.es);
    } else {
      setLanguaje("en");
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className={`mb-8 ${theme}`}>
      <Nav
        handleAuth={handleAuth}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
      />
      <Header texts={texts} />
      <NewExercise msg={texts.headerTitle} flexType="flex-col" texts={texts}>
        <a
          className="mb-4 link"
          href="https://es.reactjs.org/docs/context.html"
        >
          Documentación
        </a>
        <div className={`mb-11 bg-white dark:bg-gray-800`}>
          <h2 className="text-3xl text-center dark:text-white">
            {auth ? texts.mainHello : texts.mainWelcome}
          </h2>
        </div>
      </NewExercise>
      <Footer texts={texts} />
    </div>
  );
};

export default MyPage;
