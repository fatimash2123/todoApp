import { Formik, Form } from "formik";
import * as Yup from "yup";

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {  formik => <Form>
        <button type="submit"></button>
        </Form>}
    </Formik>
  );
}

export default FormicContainer;
