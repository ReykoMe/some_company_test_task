import styled from "@emotion/styled";

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0.6rem;
  border-radius: 50%;
  max-width: max-content;
  min-width: 1.2rem;
  min-height: 1.2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.border.input}`}
  
`

export const RadioCheckedContent = styled.div`
  background: ${(props) => props.theme.colors.background.secondary.main};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  width: 1.2rem;height: 1.2rem;
`;