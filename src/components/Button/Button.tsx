import styles from "./Button.module.css"
interface ButtonProps{
    readonly label:string,
    readonly type:"submit"
}
function Button({label,type}:ButtonProps){
    return(
        <button className={styles.button} type={type}>{label}</button>
    )
}
export default Button