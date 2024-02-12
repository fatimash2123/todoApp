import styles from "./Button.module.css"
interface ButtonProps{
    readonly label:string,
    readonly type:string
}
function Button({label,type}:ButtonProps){
    return(
        <button type={type}>{label}</button>
    )
}
export default Button