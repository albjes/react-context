import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const Body = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};

export default Body;
