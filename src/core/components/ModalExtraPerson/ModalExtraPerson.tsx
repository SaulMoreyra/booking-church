import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import useForm from "@/core/hooks/useForm";
import extraPersonSchema from "@/core/schemas/extraPerson.schema";

type TPerson = {
  firstName: string;
  lastName: string;
  age: string;
};

type Props = {
  onAdd: (person: TPerson) => void;
  onClose: () => void;
  open: boolean;
};

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
};

const ModalExtraPerson = ({ onAdd, onClose, open }: Props) => {
  const { register, handleSubmit } = useForm<TPerson>({
    initialValues,
    validationSchema: extraPersonSchema,
    onSubmit: function (values) {
      onAdd(values);
      onClose();
    },
  });

  return (
    <Dialog fullWidth open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>Agregar Acompañante</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ marginTop: 1 }}>
          <TextField fullWidth label="Nombre(s)" {...register("firstName")} />
          <TextField fullWidth label="Apellido(s)" {...register("lastName")} />
          <TextField fullWidth label="Edad" {...register("age")} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={() => handleSubmit()}>Agregar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalExtraPerson;
