import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { useContext } from "react";

export const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);
  return (
    <>
      <CrudForm />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="text-red-800"
        />
      )}
      {db && <CrudTable />}
    </>
  );
};

export default CrudApi;
