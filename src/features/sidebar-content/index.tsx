import React from "react";
import { Wrap } from "../../components/wrap";
import { Stepper } from "../../components/stepper";
import { SidebarContentProps } from "./types";
import SidebarBgImg from "../../assets/bg.png";
export const SidebarContent: React.FC<SidebarContentProps> = React.memo(
  (props) => {
    const { currentStep, steps } = props;
    return (
      <Wrap
        sx={{
          height: "100%",
          padding: "4.2rem 2.6rem",
          flexDirection: "column",
          backgroundImage: `url(${SidebarBgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "bottom"
        }}
      >
        <Stepper currentStep={currentStep} steps={steps} vertical />
      </Wrap>
    );
  }
);
