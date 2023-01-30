import * as React from "react";
import Container, { ContainerProps } from "@mui/material/Container";

const BaseContainer: React.FC<React.PropsWithChildren & ContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container maxWidth="lg" {...props}>
      {children}
    </Container>
  );
};

export default BaseContainer;
