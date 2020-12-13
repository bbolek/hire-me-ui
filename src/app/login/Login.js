import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../../slices/auth";
import Secure from "../Secure";

function Login() {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    console.log(response);
    dispatch(setToken(response.accessToken));
  };

  const componentClicked = (a) => {};
  return (
    <div>
      <FacebookLogin
        appId="1005954376565336"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      <Link to="/secure">Click</Link>
    </div>
  );
}

export default Login;
