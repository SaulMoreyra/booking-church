import { Container, Typography } from "@mui/material";
import React, { FC } from "react";
import * as S from "./BannerBooking.styled";

type BannerBookingProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const BannerBooking: FC<BannerBookingProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <S.Banner>
      <Container maxWidth="lg">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Container>
    </S.Banner>
  );
};

export default BannerBooking;
