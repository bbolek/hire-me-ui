import FacebookLogin from "react-facebook-login";

function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = (a) => {
    console.log(a);
  };
  return (
    <FacebookLogin
      appId="1005954376565336"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}

export default Login;
