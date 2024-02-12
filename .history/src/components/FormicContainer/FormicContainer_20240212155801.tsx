
import { Formik,Form } from "formik"
import * as Yup from 'yup'

interface FormikState{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}

function FormicContainer(){
    const initialValues={}
    const validationSchema=Yup.object({})
    const onSubmit=(values:FormikState)=>{console.log("Form data",values)}
    return (
        <Formik>

        </Formik>
    )
}

export default FormicContainer