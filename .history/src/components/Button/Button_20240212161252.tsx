import styles from "./Button.module.css"
interface ButtonProps{
    readonly label:string,
    readonly value:string
}
function Button({label,value}:ButtonProps){
    return(
        <button value={value}>{label}</button>
    )
}
export default Button