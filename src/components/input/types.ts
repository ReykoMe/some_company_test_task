import React, { ForwardedRef } from "react";

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export type InputProps = BaseInputProps & {
  beforeText?: string;
  centerText?: boolean;
  ref: ForwardedRef<HTMLInputElement>;
};
