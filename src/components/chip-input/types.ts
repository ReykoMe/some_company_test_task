import { InputProps } from "../input/types";

export type ChipInputChangeEvent = {
  target: {
    value: string
  }
}
export type ChipInputProps = Pick<InputProps, "label"> & {
  value?: string;
  choices?: string[];
  onChange?: (chipInputChangeEvent?: ChipInputChangeEvent) => void;
};
