import { ChangeEventHandler } from "react";
import { InputProps } from "../input/types";

export type ChipInputChangeEvent = {
  target: {
    value: string
  }
}
export type ChipInputProps = Pick<InputProps, "label"> & {
  name?: string;
  value?: string;
  choices?: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>
};
