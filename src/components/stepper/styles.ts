import { StepperProps, StepperStackProps } from "./types";
import styled from "@emotion/styled/macro";

export const StepperPoint = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.background.primary.light};
  border-radius: 50%;
`;

export const StepperSeparator = styled.div`
  min-width: 4rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.background.primary.light};
  margin: 0 0.5rem;
`;

export const StepperStack = styled.div<StepperStackProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  ${({ theme, variant }) => {
    if (variant === "current") {
      return `
      ${StepperPoint} {
        background: #fff;
      }
    `;
    }
    if (variant === "past") {
      return `
         ${StepperPoint} {
             background: ${theme.colors.background.secondary.main};
      };
       ${StepperSeparator} {
             background: ${theme.colors.background.secondary.main};
      };
    `;
    }
  }}
`;

export const StepperStepLabel = styled.span`
  line-height: 1.4rem;
  margin-left: 0.8rem;
`;

export const StepperStepWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StepperContainer = styled.div<StepperProps>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.vertical &&
    ` flex-direction: column;
      max-width: max-content;
      align-items: flex-start;
        ${StepperStack} {
              flex-direction: column;
              align-items: flex-start;
          };
        ${StepperSeparator} {
            height: 4rem;
            min-width: 1px;
            margin: 0.5rem 0.25rem;
          }
  `}
`;
