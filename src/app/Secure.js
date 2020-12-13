import API from "../utils/api";
function Secure() {
  API.get("values");
  return <div>I am Secure</div>;
}
export default Secure;
