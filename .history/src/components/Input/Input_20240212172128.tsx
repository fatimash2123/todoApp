import styles from "./Input.module.css";
import { Field,ErrorMessage } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
interface InputProps {
  readonly name: string;
  readonly label: string;
  readonly rest:any
}

function Input({name,label,...rest}:InputProps) {
    return(
        <div>
            <label htmlFor="name">{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={FormikErrorMessage}/>
        </div>
    )
}
export default Input;
