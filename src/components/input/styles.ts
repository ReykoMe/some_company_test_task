import styled from "@emotion/styled";
import { InputProps } from "./types";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: ${({ theme }) => `1px solid ${theme.colors.border.input}`};
  border-radius: ${({ theme }) => theme.decorations.borderRadius.normal};
`;

const BeforeText = styled.span`
  min-width: max-content;
  line-height: 2.2rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.font.grey};
`;
const BaseInput = styled.input<Pick<InputProps, "centerText">>`
  width: 100%;
  border: none;
  outline: none;
  text-align: ${({ centerText }) => (centerText ? "center" : "start")};
  background: ${({ theme }) => theme.colors.background.primary.main};
  color: ${({ theme }) => theme.colors.font.main};
`;

export const Component = {
  Root,
  BeforeText,
  BaseInput,
  InputSection,
};

export const InputLabel = styled.span<{
  noMargin?: boolean;
  clickable?: boolean;
}>`
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "0.5rem")};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "inherit")};
`;
