import { space } from "../../utils/space";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  width: ${space(4.8)};
  height: ${space(4.8)};
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 0 ${space(1)};
`;

export const Component = { Root, ButtonWrapper, InputWrapper };
