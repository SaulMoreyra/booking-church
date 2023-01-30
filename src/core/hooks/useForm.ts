import { useFormik, FormikValues } from "formik";

const useForm = <T extends {}>({
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}: {
  initialValues: T;
  validationSchema: any;
  onSubmit: (v: T) => void;
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    ...rest,
  });

  const register = (name: keyof T) => {
    const message = formik.errors[name];
    const touched = formik.touched[name];
    const helperText = touched && message;
    const error = Boolean(message) && Boolean(touched);

    return {
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values[name],
      name,
      error,
      helperText,
    };
  };

  return { ...formik, register };
};

export default useForm;
