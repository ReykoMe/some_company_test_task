import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 100%;
  border-right: ${({theme}) => `1px solid ${theme.colors.border.sidebar}`};
`