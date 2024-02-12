import styles from "./Input.module.css";
import { Field,ErrorMessage } from "formik";
interface InputProps {
  readonly name: string;
  readonly label: string;
  readonly rest:any
}

function Input({name,label,...rest}:InputProps) {
    return(
        <div>
            <label htmlFor="name">{label}</label>
            <Field  {...rest}/>
        </div>
    )
}
export default Input;
