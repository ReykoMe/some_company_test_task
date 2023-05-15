import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

`

export const InputLabel = styled.span`
  margin-bottom: 0.5rem;

`
export const InputSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: ${({ theme }) => `1px solid ${theme.colors.border.input}`};
  border-radius: ${({ theme }) => theme.decorations.borderRadius.normal};
`;

export const InputBeforeText = styled.span`
  min-width: max-content;
  line-height: 2.2rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.font.grey }
  
`;
export const InputBase = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.background.primary.main};
  color: ${({ theme }) => theme.colors.font.main};
`;