import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
} from "react";
import { ChipInputProps } from "./types";
import { Chip } from "../chip";
import { Component } from "./styles";
import { InputLabel } from "../input/styles";

export const ChipInput: React.FC<ChipInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { value, choices, onChange, label, name } = props;
    const handleClick = (choice: string) => () => {
      const inputData = {
        target: { value: choice, name },
      };
      onChange?.(inputData as ChangeEvent<HTMLInputElement>);
    };

    const isSelected = useCallback(
      (choice: string) => choice === value,
      [value]
    );

    return (
      <Component.Root ref={ref}>
        {label && <InputLabel>{label}</InputLabel>}
        <Component.ChipsWrapper>
          {choices?.map((choice) => (
            <Chip
              active={isSelected(choice)}
              onClick={handleClick(choice)}
              key={choice}
            >
              {choice}
            </Chip>
          ))}
        </Component.ChipsWrapper>
      </Component.Root>
    );
  }
);
