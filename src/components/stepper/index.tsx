import React from "react";
import { Component } from "./styles";
import { StepperProps, StepperStackProps } from "./types";
const { Item } = Component;

export const Stepper: React.FC<StepperProps> = (props) => {
  const { vertical, isHideLabels, steps, currentStep } = props;
  const isLastStep = (index: number) => {
    return index === steps.length - 1;
  };

  const getVariant = (index: number): StepperStackProps["variant"] => {
    if (index > currentStep) return;
    return index === currentStep ? "current" : "past";
  };

  return (
    <Component.Root vertical={vertical}>
      {steps.map((el, index) => (
        <Item.Root variant={getVariant(index)} key={el}>
          <Item.Content>
            <Item.Point />
            {!isHideLabels && <Item.Label>{el}</Item.Label>}
          </Item.Content>
          {!isLastStep(index) && <Item.Separator />}
        </Item.Root>
      ))}
    </Component.Root>
  );
};
