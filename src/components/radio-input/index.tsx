import React from "react";
import { InputLabel } from "../input/styles";
import { Radio } from "../radio";
import { Wrap } from "../wrap";
import { RadioInputProps } from "./types";

export const RadioInput: React.FC<RadioInputProps> = (props) => {
  const { choices, onChange, value } = props;
  const isChecked = (choice: string) => value === choice;

  const handleClick = (choice: string) => () => {
    onChange && onChange({ target: { value: choice } });
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
