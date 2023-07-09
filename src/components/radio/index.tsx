import { RadioProps } from "./types";
import { Component } from "./styles";

export const Radio: React.FC<RadioProps> = (props) => {
  const { checked } = props;
  return (
    <Component.Root>{checked && <Component.CheckedContent />}</Component.Root>
  );
};
