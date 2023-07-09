import { Input } from "../input";
import { Button } from "../button";
import { CounterInputProps } from "./types";
import {
  ChangeEvent,
  ChangeEventHandler,
  ForwardedRef,
  MouseEventHandler,
  forwardRef,
} from "react";
import { Component } from "./styles";

export const CounterInput: React.FC<CounterInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, onChange, value = "0", min = 0, max = 10000 } = props;

    const handleClickButton =
      (type: "plus" | "minus"): MouseEventHandler<HTMLButtonElement> =>
      () => {
        let inputValue = Number(value);
        if (type === "minus" && inputValue > min) --inputValue;
        if (type === "plus" && inputValue < max) ++inputValue;
        const changeData = {
          target: {
            name,
            value: inputValue.toString(),
          },
        };
        onChange && onChange(changeData as ChangeEvent<HTMLInputElement>);
      };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      if (!isNaN(Number(value))) {
        onChange && onChange(e);
      }
    };

    const handleBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      let inputValue = Number(value);
      if (inputValue < min) {
        inputValue = min;
      } else if (inputValue > max) {
        inputValue = max;
      }
      const changeData = {
        target: {
          name,
          value: inputValue.toString(),
        },
      };
      onChange && onChange(changeData as ChangeEvent<HTMLInputElement>);
    };

    return (
      <Component.Root>
        <Component.ButtonWrapper>
          <Button secondary onClick={handleClickButton("minus")} type="button">
            -
          </Button>
        </Component.ButtonWrapper>
        <Component.InputWrapper>
          <Input
            value={value}
            centerText
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={ref}
          />
        </Component.InputWrapper>
        <Component.ButtonWrapper>
          <Button secondary onClick={handleClickButton("plus")}>
            +
          </Button>
        </Component.ButtonWrapper>
      </Component.Root>
    );
  }
);
