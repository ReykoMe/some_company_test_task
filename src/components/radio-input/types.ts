import { ChipInputChangeEvent } from '../chip-input/types';

export type RadioInputChangeEvent = ChipInputChangeEvent;

export type RadioInputProps = {
  value?: string;
  choices?: string[];
  onChange?: (radioInputEvent: RadioInputChangeEvent) => void;
};