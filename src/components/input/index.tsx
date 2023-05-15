import React from "react"
import {InputBeforeText, InputBase, InputContainer, InputLabel, InputSectionWrapper} from './styles';
import { InputProps } from "./types";
export const Input: React.FC<InputProps> = (props) => {
  const {value, beforeText,label, placeholder, onChange } = props
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputSectionWrapper>
        {beforeText && <InputBeforeText>{beforeText}</InputBeforeText>}
        <InputBase value={value} onChange={onChange} placeholder={placeholder} />
      </InputSectionWrapper>
    </InputContainer>
  );
}