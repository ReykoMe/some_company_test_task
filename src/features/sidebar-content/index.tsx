import React from "react";
import { Wrap } from "../../components/wrap";
import { SidebarContentProps } from "./types";
import { rootStyles } from "./styles";

export const SidebarContent: React.FC<SidebarContentProps> = React.memo(
  (props) => {
    const { children } = props;
    return <Wrap sx={rootStyles}>{children}</Wrap>;
  }
);
