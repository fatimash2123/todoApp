interface FormikControlProps{
    control:"input" | "password";
    rest:any
}
function FormikControl({control,...rest}:FormikControlProps){
    switch(control){
        case 'input':
        case 'password':
        default:return null
    }
}
export default FormikControl