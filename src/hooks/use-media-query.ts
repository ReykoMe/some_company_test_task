import { useLayoutEffect, useState } from "react";

export const screenSizes = {
  sm: "576px",
  md: "768px",
};

export type MediaQuerySizes = keyof typeof screenSizes;

const getMediaQueryString = (value: MediaQuerySizes | number) => {
  const valueString =
    typeof value === "string" ? screenSizes[value] : `${value}px`;
  return `(max-width: ${valueString})`;
};

// it's better to use this hook with context as every time when you call it,
// you adding new event listener for load and resize window
// that's why I'm passing current value in props

export function useMediaQuery(size: MediaQuerySizes | number): boolean {
  const [matched, setMatched] = useState<boolean>(false);

  useLayoutEffect(() => {
    const checkWindowMedia = () => {
      const { matches } = matchMedia(getMediaQueryString(size));
      setMatched(matches);
    };

    window.addEventListener("load", checkWindowMedia);
    window.addEventListener("resize", checkWindowMedia);
  }, []);

  return matched;
}
