import styled from "@emotion/styled";
import {ChipProps} from './types';

export const ChipContainer = styled.div<ChipProps>`
  background: ${({ theme }) => theme.colors.background.primary.dark};
  max-width: max-content;
  padding: 0.6rem 1.2rem;
  border-radius: ${({ theme }) => theme.decorations.borderRadius.large};
  ${(props) => props.active && `
    background: ${props.theme.colors.background.secondary.dark};
    color: ${props.theme.colors.font.tertiary}
  `}
`;