import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
interface formikState {
  name: string;
  email: string;
}

function Login() {
  const initialValues: formikState = { name: "", email: "" };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validate = (values: formikState) => {
    let errors: formikState = { name: "", email: "" };
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email not correct";
    }
    return errors;
  };
  const onSubmit = (values: formikState) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <h1>Welcome Back</h1>
      <Form className={styles.formStyles}>
        <label htmlFor="name">First Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" />

        <input type="submit" value="Submit" />
      </Form>
    </Formik>
  );
}
export default Login;
