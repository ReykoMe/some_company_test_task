import styled from "@emotion/styled";
import { WrapProps } from "./types";

export const Wrap = styled.div<WrapProps>(({ sx }) => ({
  display: "flex",
  ...sx,
}));
