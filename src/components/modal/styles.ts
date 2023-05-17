import styled from "@emotion/styled"
import { ModalProps } from "./types"

export const ModalContainer = styled.div<Pick<ModalProps, 'open'>>`
  display: ${({open}) => open ? "flex": "none"};
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background: #fff; */
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
`
export const ModalContent = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.primary.main};
  border: ${({ theme }) => `1px solid ${theme.colors.border.sidebar}`};
  border-radius: ${({ theme }) => theme.decorations.borderRadius.normal }
`