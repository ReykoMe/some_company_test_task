import styled from "@emotion/styled";
import { ModalProps } from "./types";

const Root = styled.div<Pick<ModalProps, "open">>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Content = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.primary.main};
  border: ${({ theme }) => `1px solid ${theme.colors.border.sidebar}`};
  border-radius: ${({ theme }) => theme.decorations.borderRadius.normal};
`;

export const Component = { Root, Content };
