import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import NewExercise from "./components/NewExercise";

function App() {
  return (
    <div>
      <CrudProvider>
        <NewExercise msg="CRUD API CON CONTEXT" flexType="flex-col">
          <CrudApi />
        </NewExercise>
      </CrudProvider>
      <MyPageContext />
      <MyPage />
    </div>
  );
}

export default App;
