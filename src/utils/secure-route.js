import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const SecureRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector((state) => state);
  if (auth.isAuthenticated) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
  }
};

export default SecureRoute;
