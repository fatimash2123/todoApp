interface CustomFormikInputComponentProps {
  readonly field: Object;
  readonly form: Object;
  readonly meta: Object;
  readonly name: string;
  readonly type: string;
  readonly label:string;
}
function CustomFormikInputComponent({
  field,
  form,
  meta,
  name,
  type,
  label
}: CustomFormikInputComponentProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
}
export default CustomFormikInputComponent;
