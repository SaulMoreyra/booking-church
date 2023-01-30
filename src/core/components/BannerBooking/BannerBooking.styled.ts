import { styled } from "@mui/material";

export const Banner = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  minHeight: 80,
  paddingTop: 8,
  paddingBottom: 8,
}));
