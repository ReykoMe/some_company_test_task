export const breakpoints = {
  sm: "576px",
  md: "768px",
};

export const breakpoint = (
  type: "min" | "max",
  size: keyof typeof breakpoints
) => `@media (${type}-width:${breakpoints[size]})`;
