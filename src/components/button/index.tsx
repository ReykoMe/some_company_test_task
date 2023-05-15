import React from "react"
import { ButtonContainer } from "./styles"
import { ButtonProps } from "./types"
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, ...restProps } = props
  return <ButtonContainer {...restProps}>{ children }</ButtonContainer>
}