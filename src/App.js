import "./App.css";
import "./index.css";
import Login from "./app/login/Login";
import Secure from "./app/Secure";
import SecureRoute from "./utils/secure-route";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="h-screen">
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <SecureRoute exact path="/secure" component={Secure}></SecureRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
