import styled from "@emotion/styled";
import { space } from "../../utils/space";

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${space(2.8)};
`;

const FormScreenTitleContainer = styled.div`
  display: flex;
  margin-bottom: ${space(1.6)};
  flex-direction: column;
  gap: ${space(2)};
`;

const FormScreenRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormScreenContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormScreen = {
  Root: FormScreenRoot,
  TitleContainer: FormScreenTitleContainer,
  Content: FormScreenContent,
};

export const Component = {
  InputWrapper,
  FormScreenTitleContainer,
  FormScreen,
};
