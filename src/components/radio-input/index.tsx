import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { InputLabel } from "../input/styles";
import { Radio } from "../radio";
import { RadioInputProps } from "./types";
import { Component } from "./styles";
const { Choice } = Component;

export const RadioInput: React.FC<RadioInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { choices, onChange, value, name } = props;
    const isChecked = (choice: string) => value === choice;

    const handleClick = (choice: string) => () => {
      const eventData = { target: { value: choice, name } };
      onChange && onChange(eventData as ChangeEvent<HTMLInputElement>);
    };

    return (
      <Component.Root ref={ref}>
        {choices?.map((choice) => (
          <Choice.Root onClick={handleClick(choice)} key={choice}>
            <Choice.RadioWrapper>
              <Radio checked={isChecked(choice)} />
            </Choice.RadioWrapper>
            <InputLabel noMargin clickable>
              {choice}
            </InputLabel>
          </Choice.Root>
        ))}
      </Component.Root>
    );
  }
);
