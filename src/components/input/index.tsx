import React from "react";
import {
  InputBeforeText,
  InputBase,
  InputContainer,
  InputLabel,
  InputSectionWrapper,
} from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = (props) => {
  const { value, beforeText, label, placeholder, onChange, name, readOnly, centerText } =
    props;
  
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputSectionWrapper>
        {beforeText && <InputBeforeText>{beforeText}</InputBeforeText>}
        <InputBase
          value={value}
          placeholder={placeholder}
          name={name}
          readOnly={readOnly}
          centerText={centerText}
          onChange={onChange}
        />
      </InputSectionWrapper>
    </InputContainer>
  );
};
