import React from "react";
import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";
export const Button: React.FC<
  React.PropsWithChildren<
    ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
  >
> = (props) => {
  const { children, ...restProps } = props;
  return (
    <ButtonContainer type="button" {...restProps}>
      {children}
    </ButtonContainer>
  );
};
