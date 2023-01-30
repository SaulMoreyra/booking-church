import { useState } from "react";
import useForm from "@/core/hooks/useForm";
import bookingSchema from "@/core/schemas/register.schema";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalExtraPerson from "../ModalExtraPerson";
import CardPerson from "../CardPerson";

type TPerson = {
  firstName: string;
  lastName: string;
  age: string;
};

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  mision: "",
  hotel: false,
};

const FormBooking = () => {
  const [modal, setModal] = useState(false);
  const [people, setPeople] = useState<TPerson[]>([]);
  const { register, values, handleChange } = useForm({
    initialValues,
    validationSchema: bookingSchema,
    onSubmit: () => {},
  });

  const handleAddPeople = (person: TPerson) => {
    setPeople([...people, person]);
  };

  const handleDeletePeople = (index: number) => {
    const newPeople = people.filter((_, i) => i !== index);
    setPeople(newPeople);
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="h5">Datos</Typography>
            <TextField fullWidth label="Nombre(s)" {...register("firstName")} />
            <TextField
              fullWidth
              label="Apellido(s)"
              {...register("lastName")}
            />
            <TextField fullWidth label="Telefono" {...register("phone")} />
            <TextField fullWidth label="Mision" {...register("mision")} />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={values.hotel} />}
                label="Requiero Hotel"
                name="hotel"
                onChange={handleChange}
              />
            </FormGroup>
            <Button
              onClick={() => setModal(true)}
              size="large"
              variant="outlined"
            >
              Agregar Acompañante
            </Button>
            <Button size="large" variant="contained">
              Crear Reservción
            </Button>
          </Stack>
        </Grid>
        {people.length > 0 && (
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5">Acompañantes</Typography>
              </Grid>
              {people.map((person, index) => (
                <Grid item key={`person-${index}`}>
                  <CardPerson
                    person={person}
                    onDelete={() => handleDeletePeople(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
      {modal && (
        <ModalExtraPerson
          onAdd={handleAddPeople}
          onClose={() => setModal(false)}
          open={modal}
        />
      )}
    </>
  );
};

export default FormBooking;
