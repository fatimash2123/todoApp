import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import styles from "./FormicContainer.module.css"
interface FormikState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormicContainer() {
  const initialValues: FormikState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({});
  const onSubmit = (values: FormikState) => {
    console.log("Form data", values);
  };
  return (
    <>
    <div className={styles.upperContainer}>
        <h1>Register</h1>
    </div>
    <Formik className={styles.formikContainer}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className={styles.formMain}>
          <Button type="submit" label="Submit"/>
        </Form>
      )}
    </Formik>
    </>
  );
}

export default FormicContainer;
