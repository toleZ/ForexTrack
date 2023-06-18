import { useDispatch } from "react-redux";
import Table from "./components/Table";
import { useEffect } from "react";
import { chargeStore } from "./redux/slices/foregein/thunk";
import Foooter from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chargeStore());
  }, []);

  return (
    <>
      <Table />
      <Foooter />
    </>
  );
};

export default App;
