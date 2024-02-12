import styles from "./Login.module.css";
import { useFormik } from "formik";

interface formikState {
  name: string;
  email: string;
}

function Login() {
  const initialValues: formikState = { name: "", email: "" };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <h1>Welcome Back</h1>
      <form className={styles.formStyles} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Last Name</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Login;
