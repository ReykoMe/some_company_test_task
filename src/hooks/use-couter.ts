import { useCallback, useState } from "react";

export type UseCounterReturnType = {
  next: VoidFunction;
  prev: VoidFunction;
  currentStep: number;
};

export const useCounter = (params: {
  maxValue: number;
  onLastValue: VoidFunction;
}): UseCounterReturnType => {
  const { onLastValue: onLastStep, maxValue: maxStep } = params;
  const [currentStep, setCurrentStep] = useState<number>(0);

  const isLastStep = currentStep === maxStep;

  const nextStep = () =>
    setCurrentStep((prev) => (prev < maxStep && ++prev) || prev);

  const prevStep = useCallback(
    () => setCurrentStep((prev) => (prev > 0 && --prev) || prev),
    [currentStep]
  );

  const handleClickNext = isLastStep ? onLastStep : nextStep;

  return { next: handleClickNext, prev: prevStep, currentStep };
};
