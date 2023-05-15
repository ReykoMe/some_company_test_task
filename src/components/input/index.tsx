import React from "react"
import {InputAdornment, InputBase, InputContainer, InputLabel, InputSectionWrapper} from './styles';
export const Input: React.FC = () => {
  return (
    <InputContainer>
      <InputLabel>Project Name (It can be changed later)</InputLabel>
      <InputSectionWrapper>
        <InputAdornment>Alphaguilty.io/</InputAdornment>
        <InputBase defaultValue="awesomenftpunch" />
      </InputSectionWrapper>
    </InputContainer>
  );
}