import { appTheme } from "./../../settings/theme/theme.main";
import styled from "@emotion/styled";
import { TypographyProps } from "./types";

const { colors } = appTheme;

const getFontcolor = (color?: TypographyProps["color"]) => {
  return color === "secondary"
    ? colors.font.secondary
    : color === "tertiary"
    ? colors.font.tertiary
    : color === "disabled"
    ? colors.font.grey
    : colors.font.main;
};

export const H2Header = styled.h2<TypographyProps>`
  color: ${({ color }) => getFontcolor(color)};
`;
export const BodyText = styled.span<TypographyProps>`
  color: ${({ color }) => getFontcolor(color)};
`;
