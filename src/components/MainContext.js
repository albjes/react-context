import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const MainContext = () => {
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className={`mb-11 bg-white dark:bg-gray-800`}>
      <h2 className="text-3xl text-center dark:text-white">
        {auth ? texts.mainHello : texts.mainWelcome}
      </h2>
    </div>
  );
};

export default MainContext;
