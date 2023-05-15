import React from "react"
import { ChipInputProps } from "./types"
import { Wrap } from "../wrap"
import { Chip } from "../chip"
import { InputLabel } from "../input/styles"

export const ChipInput: React.FC<ChipInputProps> = (props) => {
  const { value, choices, onChange, label } = props

  const isSelected = (choice: string) => choice === value

  const handleClick = (choice: string) => () => {
    onChange && onChange({ target: { value: choice } });
  }

  return (
    <Wrap sx={{ flexDirection: "column" }}>
      {label && <InputLabel>{label}</InputLabel>}
      <Wrap>
        {choices?.map((choice) => (
          <Wrap sx={{ margin: "1.2rem 0.6rem" }}>
            <Chip active={isSelected(choice)} onClick={handleClick(choice)}>{choice}</Chip>
          </Wrap>
        ))}
      </Wrap>
    </Wrap>
  );
}