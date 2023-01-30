import * as yup from "yup";

const bookingSchema = yup.object().shape({
  firstName: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  phone: yup.string().required("Campo requerido"),
  mision: yup.string().required("Campo requerido"),
  hotel: yup.bool(),
  extraPeople: yup.bool(),
});

export default bookingSchema;
