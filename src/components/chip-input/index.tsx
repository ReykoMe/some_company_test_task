import React, { ChangeEvent } from "react";
import { ChipInputProps } from "./types";
import { Wrap } from "../wrap";
import { Chip } from "../chip";
import { InputLabel } from "../input/styles";

export const ChipInput: React.FC<ChipInputProps> = (props) => {
  const { value, choices, onChange, label, name } = props;

  const handleClick = (choice: string) => () => {
    const inputData = {
      target: { value: choice, name },
    };
    onChange && onChange(inputData as ChangeEvent<HTMLInputElement>);
  };

  const isSelected = (choice: string) => choice === value;

  return (
    <Wrap sx={{ flexDirection: "column" }}>
      {label && <InputLabel>{label}</InputLabel>}
      <Wrap sx={{ flexWrap: "wrap" }}>
        {choices?.map((choice) => (
          <Wrap sx={{ margin: "0.6rem 0.6rem" }}>
            <Chip active={isSelected(choice)} onClick={handleClick(choice)}>
              {choice}
            </Chip>
          </Wrap>
        ))}
      </Wrap>
    </Wrap>
  );
};
