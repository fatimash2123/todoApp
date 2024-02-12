import styles from "./Login.module.css";
import { useFormik,Formik } from "formik";
interface formikState {
  name: string;
  email: string;
}

function Login() {
  const initialValues: formikState = { name: "", email: "" };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  const validate=(values:formikState)=>{
    let errors:formikState={name:"",email:""}
    if(!values.name){
        errors.name="Required"
    }
    if(!values.email){
        errors.email="Required"
    }
    else if(!emailRegex.test(values.email)){
        errors.email="Email not correct"
    }
    return errors
  }
  const onSubmit=(values:formikState)=>{
    console.log(values);
  }
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  });
  return (
    <Formik
    initialValues={initialValues}
    validate={validate}

    >
      <h1>Welcome Back</h1>
      <form className={styles.formStyles} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name?<p>{formik.errors.name}</p>:null}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
         {formik.errors.email && formik.touched.email?<p>{formik.errors.email}</p>:null}

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Login;
