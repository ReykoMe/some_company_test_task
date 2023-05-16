import React from "react";
import { Wrap } from "../../components/wrap";
import { Stepper } from "../../components/stepper";
import { SidebarContentProps } from "./types";

export const SidebarContent: React.FC<SidebarContentProps> = React.memo(
  (props) => {
    const { currentStep, steps } = props;
    return (
      <Wrap sx={{ height: "100%", margin: "4.2rem 2.6rem" }}>
        <Stepper currentStep={currentStep} steps={steps} vertical />
      </Wrap>
    );
  }
);
