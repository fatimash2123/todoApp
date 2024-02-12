import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";


interface FormikState {
  name: string;
  email: string;
}

function Login() {
  const initialValues: FormikState = { name: "", email: "" };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validate = (values: FormikState) => {
    let errors: FormikState = { name: "", email: "" };
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
  const onSubmit = (values: FormikState) => {
    console.log(values);
  };

  return (
    <>
      <h1>Welcome Back</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className={styles.formStyles}>
          <label htmlFor="name">First Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
export default Login;
