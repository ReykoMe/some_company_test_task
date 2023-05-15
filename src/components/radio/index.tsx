import { RadioCheckedContent, RadioContainer } from "./styles";
import { RadioProps } from "./types";

export const Radio: React.FC<RadioProps> = (props) => {
  const { checked } = props
  return <RadioContainer>
    {checked && <RadioCheckedContent />}
  </RadioContainer>
}