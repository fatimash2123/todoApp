import styles from "./Login.module.css";
function Login() {
  return (
    <>
      <h1>Welcome Back</h1>
      <form action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Login;
