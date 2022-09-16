import { AuthProvider } from "../context/AuthContext";
import Body from "./Body";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import { LanguageProvider } from "../context/LanguageContext";
import MainContext from "./MainContext";
import NavContext from "./NavContext";
import NewExerciseContext from "./NewExerciseContext";
import { ThemeProvider } from "../context/ThemeContext";

const MyPageContext = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Body>
            <NavContext />
            <HeaderContext />
            <NewExerciseContext flexType="flex-col">
              <a
                className="mb-4 link"
                href="https://es.reactjs.org/docs/context.html"
              >
                Documentación
              </a>
              <MainContext />
            </NewExerciseContext>
            <FooterContext />
          </Body>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MyPageContext;
