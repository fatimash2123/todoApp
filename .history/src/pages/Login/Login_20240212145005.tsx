import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomFormikInputComponent from "../../components/CustomFormikInputComponent/CustomFormikInputComponent";
import FormikErrorMessage from "../../components/FormikErrorMessage/FormikErrorMessage";

interface FormikState {
  name: string;
  email: string;
  password: string;
}
interface FieldPropsType {
  field: any;
  form: any;
  meta: any;
}

function Login() {
  const initialValues: FormikState = { name: "", email: "", password: "" };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validate = (values: FormikState) => {
    let errors: FormikState = { name: "", email: "", password: "" };
    console.log("values got in validate is=",values)
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email not correct";
    }
    console.log("errors is=",errors)
    return errors;
  };
  const onSubmit = (values: FormikState) => {
    console.log("onsubmit==", values);
  };

  return (
    <>
      <h1>Welcome Back</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(formik) => {
            console.log(formik)
          return (
            <Form className={styles.formStyles}>
              <label htmlFor="name">First Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={FormikErrorMessage} />

              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component={FormikErrorMessage} />

              <Field name="password">
                {(props: FieldPropsType) => {
                  // console.log(props);
                  const { form, field, meta } = props;
                  return (
                    <CustomFormikInputComponent
                      form={form}
                      field={field}
                      meta={meta}
                      name={"password"}
                      type={"password"}
                      label={"Password"}
                    />
                  );
                }}
              </Field>

              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
export default Login;
