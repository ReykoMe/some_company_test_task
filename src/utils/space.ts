export const space = (value: string | number): string => {
  if (typeof value === "number") {
    return value.toString() + "rem";
  }
  return value;
};
