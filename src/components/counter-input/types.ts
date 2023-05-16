import { BaseInputProps } from "../input/types";

export type CounterInputProps = BaseInputProps & {
  min?: number
  max?: number
}