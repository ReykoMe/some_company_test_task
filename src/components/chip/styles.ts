import styled from "@emotion/styled";
import {ChipProps} from './types';

export const ChipContainer = styled.div<ChipProps>`
  background: ${({ theme }) => theme.colors.background.primary.dark};
  max-width: max-content;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    background: ${({theme}) => `${theme.colors.background.primary.light}`};
  };
  border-radius: ${({ theme }) => theme.decorations.borderRadius.large};
  ${(props) => props.active && `
    background: ${props.theme.colors.background.secondary.dark};
    color: ${props.theme.colors.font.tertiary};
    &:hover {
      background:  ${props.theme.colors.background.secondary.dark};
    };
  `}
`;