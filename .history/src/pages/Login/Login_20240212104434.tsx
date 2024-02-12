import styles from "./Login.module.css";
function Login() {
  return (
    <>
      <h1>Welcome Back</h1>
      <form action="/action_page.php">
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email">Last Name</label>
        <input
          type="email"
          id="email"
          name="email"
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Login;
