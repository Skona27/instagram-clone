import * as React from "react";
import { IBreakpoints, IColors, ITheme } from "./types";

const ThemeContext = React.createContext<ITheme | null>(null);

export const ThemeProvider = React.memo((props: any) => {
  const breakpoints: IBreakpoints = {
    fromTablet: "@media (min-width: 600px)",
    fromDesktop: "@media (min-width: 950px)"
  };

  const colors: IColors = {
    white: "#ffffff",
    light_blue: "#3a80c5",
    dark_blue: "#003569",
    grey: "#999",
    light_grey: "#efefef"
  };

  return (
    <ThemeContext.Provider value={{ colors, bp: breakpoints }} {...props} />
  );
});
ThemeProvider.displayName = "ThemeProvider";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme context was not provided");
  }

  return context;
};
