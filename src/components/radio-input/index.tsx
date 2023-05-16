import React, { ChangeEvent } from "react";
import { InputLabel } from "../input/styles";
import { Radio } from "../radio";
import { Wrap } from "../wrap";
import { RadioInputProps } from "./types";

export const RadioInput: React.FC<RadioInputProps> = (props) => {
  const { choices, onChange, value, name } = props;
  const isChecked = (choice: string) => value === choice;

  const handleClick = (choice: string) => () => {
    const eventData = { target: { value: choice, name } };
    onChange && onChange(eventData as ChangeEvent<HTMLInputElement>);
  };

  return (
    <Wrap sx={{ flexDirection: "column" }}>
      {choices?.map((choice) => (
        <Wrap onClick={handleClick(choice)} sx={{ margin: "1rem 0", alignItems: 'center' }}>
          <Wrap sx={{marginRight: '0.8rem'}}>
            <Radio checked={isChecked(choice)} />
          </Wrap>
          <InputLabel>{choice}</InputLabel>
        </Wrap>
      ))}
    </Wrap>
  );
};
