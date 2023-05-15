import React from "react"
import { StepperPoint, StepperSeparator, StepperContainer, StepperStack, StepperStepWrapper, StepperStepLabel } from "./styles"
import { StepperProps, StepperStackProps } from "./types"

const steps = ["Create", "Update", "Delete"]

export const Stepper: React.FC<StepperProps> = (props) => {
  const {vertical, isHideLabels } = props
  const currentStep = 1
  const isLastStep = (index: number) => {
    return index === steps.length - 1
  }

  const getVariant = (index: number): StepperStackProps['variant'] => {
    if (index > currentStep)  return
    return index === currentStep
      ? "current"
      :  "past"
  }

  return (
    <StepperContainer vertical={vertical}>
      {steps.map((el, index) => (
        <StepperStack variant={getVariant(index)}>
          <StepperStepWrapper>
            <StepperPoint />
            {!isHideLabels && <StepperStepLabel>{el}</StepperStepLabel>}
          </StepperStepWrapper>
          {!isLastStep(index) && <StepperSeparator />}
        </StepperStack>
      ))}
    </StepperContainer>
  );}
