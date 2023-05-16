import { ChipInputChangeEvent } from '../chip-input/types';
import { BaseInputProps } from '../input/types';

export type RadioInputChangeEvent = ChipInputChangeEvent;

export type RadioInputProps = BaseInputProps &  {
  choices?: string[];
};