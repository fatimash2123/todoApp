interface FormikControlProps{
    control:"input" | "password"
}
function FormikControl(props:FormikControlProps){
    const {control}=props
    switch(control){
        case 'input':
        case 'password':
            default:return null
    }
}
export default FormikControl