import { Input } from "../input";
import { Button } from "../button";
import { Wrap } from "../wrap";
import { CounterInputProps } from "./types";
import { ChangeEvent, MouseEventHandler } from "react";

export const CounterInput: React.FC<CounterInputProps> = (props) => {
  const { name, onChange, value = "0", min = 0, max = 10000 } = props;

  const handleClickButton =
    (type: "plus" | "minus"): MouseEventHandler<HTMLButtonElement> =>
    () => {
      let inputValue = Number(value)
      if (type === "minus" && inputValue > min) --inputValue
      if (type === "plus" && inputValue < max) ++inputValue;
      const changeData = {
        target: {
          name,
          value: inputValue.toString(),
        },
      };
      onChange && onChange(changeData as ChangeEvent<HTMLInputElement>);
      };

  return (
    <Wrap>
      <Wrap sx={{ width: "4.8rem" }}>
        <Button secondary onClick={handleClickButton("minus")}>
          -
        </Button>
      </Wrap>
      <Wrap sx={{ margin: "0 1rem" }}>
        <Input
          value={value}
          centerText
          readOnly
        />
      </Wrap>
      <Wrap sx={{ width: "4.8rem", height: "4.8rem" }}>
        <Button secondary onClick={handleClickButton("plus")}>
          +
        </Button>
      </Wrap>
    </Wrap>
  );
};
