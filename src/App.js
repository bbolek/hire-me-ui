import "./App.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { putToken, deleteToken } from "./slices/auth";
function App() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state).auth;

  const handleUp = () => {
    dispatch(putToken("myToken"));
  };

  const handleDown = () => {
    dispatch(deleteToken());
  };

  return (
    <div className="App">
      <h1>My Amazing Counter</h1>

      <h2>Current Count: {token}</h2>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
}

export default App;
