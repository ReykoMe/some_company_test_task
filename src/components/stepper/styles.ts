import { StepperContainerProps, StepperStackProps } from "./types";
import styled from "@emotion/styled/macro";

const ItemPoint = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  min-width: 0.8rem;
  background: ${({ theme }) => theme.colors.background.primary.light};
  border-radius: 50%;
`;

const ItemSeparator = styled.div`
  min-width: 4rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.background.primary.light};
  margin: 0 0.5rem;
`;

const ItemRoot = styled.div<StepperStackProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  ${({ theme, variant }) => {
    if (variant === "current") {
      return `
      ${ItemPoint} {
        background: #fff;
      }
    `;
    }
    if (variant === "past") {
      return `
         ${ItemPoint} {
             background: ${theme.colors.background.secondary.main};
      };
       ${ItemSeparator} {
             background: ${theme.colors.background.secondary.main};
      };
    `;
    }
  }}
`;

const ItemLabel = styled.span`
  line-height: 1.4rem;
  margin-left: 0.8rem;
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const Root = styled.div<StepperContainerProps>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.vertical &&
    ` flex-direction: column;
      max-width: max-content;
      align-items: flex-start;
        ${ItemRoot} {
              flex-direction: column;
              align-items: flex-start;
          };
        ${ItemSeparator} {
            height: 4rem;
            min-width: 1px;
            margin: 0.5rem 0.4rem;
          }
  `}
`;

const Item = {
  Root: ItemRoot,
  Separator: ItemSeparator,
  Point: ItemPoint,
  Content: ItemContent,
  Label: ItemLabel,
};

export const Component = { Root, Item };
