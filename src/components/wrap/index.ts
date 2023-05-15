import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const Wrap = styled.div<{ sx: CSSProperties }>(({ sx }) => ({
  display: "flex",
  ...sx,
}));
