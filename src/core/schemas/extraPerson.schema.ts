import * as yup from "yup";

const extraPersonSchema = yup.object().shape({
  firstName: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  age: yup.string().required("Campo requerido"),
});

export default extraPersonSchema;
