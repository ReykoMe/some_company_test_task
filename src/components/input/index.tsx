import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./types";
import { InputLabel, Component } from "./styles";

export const Input: React.FC<InputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { beforeText, label, centerText, ...inputProps } = props;
    return (
      <Component.Root>
        {label && <InputLabel>{label}</InputLabel>}
        <Component.InputSection>
          {beforeText && (
            <Component.BeforeText>{beforeText}</Component.BeforeText>
          )}
          <Component.BaseInput
            centerText={centerText}
            {...inputProps}
            ref={ref}
          />
        </Component.InputSection>
      </Component.Root>
    );
  }
);
