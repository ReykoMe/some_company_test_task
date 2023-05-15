import styled from "@emotion/styled";
import { ButtonProps } from "./types";

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 1.3rem 0;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 200ms;
  border-radius: ${({ theme }) => theme.decorations.borderRadius.normal};
  color: ${({ theme }) => theme.colors.font.secondary};
  background: ${({ theme }) => theme.colors.background.secondary.main};
  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary.light};
  }
  ${({ theme, secondary }) =>
    secondary &&
    `
    background: ${theme.colors.background.primary.dark};
    color: ${theme.colors.font.main};
    &:hover {
      background: ${theme.colors.background.primary.light};
     }
  `}
`;