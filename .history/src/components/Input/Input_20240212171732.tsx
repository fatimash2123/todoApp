import styles from "./Input.module.css";
import { Field,ErrorMessage } from "formik";}
interface InputProps {
  readonly name: string;
  readonly label: string;
}

function Input({name,label}:InputProps) {
    return(
        <div>
            <label htmlFor="name">{label}</label>
        </div>
    )
}
export default Input;
