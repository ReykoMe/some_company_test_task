import { space } from "./../../utils/space";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space(1)};
`;

export const Component = { Root, ChipsWrapper };
