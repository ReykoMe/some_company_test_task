import styled from "@emotion/styled";
import { screenSizes } from "../../hooks/use-media-query";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 6rem;
  @media (max-width: ${screenSizes.sm}) {
    padding: 7.2rem 1.6rem;
  }
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 100%;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border.sidebar}`};
  @media (max-width: ${screenSizes.sm}) {
    display: none;
  }
`