import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  person: {
    firstName: string;
    lastName: string;
    age: string;
  };
  onDelete: () => void;
};

const CardPerson = ({ person, onDelete }: Props) => {
  return (
    <Grid
      container
      sx={{
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        border: "1px solid #e0e0e0",
        marginBottom: 1,
        borderRadius: 1,
      }}
    >
      <Grid item xs={4}>
        <Typography variant="caption">Nombre(s)</Typography>
        <Typography>{person.firstName}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="caption">Apellido(s)</Typography>
        <Typography>{person.lastName}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="caption">Edad</Typography>
        <Typography>{person.age}</Typography>
      </Grid>
      <Grid item xs={1} container justifyContent="center">
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default CardPerson;
