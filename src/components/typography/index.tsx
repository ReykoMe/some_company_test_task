import React from "react"
import { BodyText, H2Header } from "./styles";
import {TypographyProps, TypographyComponentTypes} from './types';
import { StyledComponent } from "@emotion/styled";

const componentsMap: Record<TypographyComponentTypes, StyledComponent<TypographyProps>> = {
  h2: H2Header,
  default: BodyText
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = (
  props
) => {
  const { component = "default", children,...restProps } = props;
  const Component = componentsMap[component];
  return <Component {...restProps}>{ children }</Component>;
};