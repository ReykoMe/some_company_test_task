import { CSSObject } from "@emotion/react";
import SidebarBgImg from "../../assets/bg.png";
import { breakpoint } from "../../utils/breakpoint";
export const rootStyles: CSSObject = {
  height: "100%",
  padding: "4.2rem 2.6rem",
  flexDirection: "column",
  backgroundImage: `url(${SidebarBgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  [breakpoint("max", "sm")]: {
    display: "none",
  },
};
