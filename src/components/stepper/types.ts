export type StepperProps = {
  steps: string[]
  currentStep: number
  vertical?: boolean
  isHideLabels?: boolean
}

export type StepperStackProps = {
  variant?: "current" | "past"
}

export type StepperContainerProps = Pick<StepperProps, "vertical">