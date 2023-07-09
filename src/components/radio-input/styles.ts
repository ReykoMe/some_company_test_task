import { space } from "./../../utils/space";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemRoot = styled.div`
  display: flex;
  margin: ${space(1)} 0;
  align-items: center;
`;

const ItemRadioWrapper = styled.div`
  margin: ${space(0.8)};
`;

const Choice = {
  Root: ItemRoot,
  RadioWrapper: ItemRadioWrapper,
};

export const Component = { Root, Choice };
