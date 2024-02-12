interface CustomFormikInputComponentProps {
  readonly field: any;
  readonly form: any;
  readonly meta: any;
  name: string;
  type: string;
}
function CustomFormikInputComponent({
  field,
  form,
  meta,
  name,
  type,
}: CustomFormikInputComponentProps) {
  return (
    <>
      <label htmlFor={name}>First Name</label>
      <input type={type} id={name} name={name} />
      {meta.touched && meta.error? <p>{meta.error}</p>:null}
    </>
  );
}
export default CustomFormikInputComponent;
