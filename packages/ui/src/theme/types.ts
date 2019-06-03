export type IColor =
  | "white"
  | "dark_blue"
  | "light_blue"
  | "grey"
  | "light_grey";
export type IBreakpoint = "fromTablet" | "fromDesktop";

export type IColors = { [Key in IColor]: string };
export type IBreakpoints = { [Key in IBreakpoint]: string };

export interface ITheme {
  colors: IColors;
  bp: IBreakpoints;
}
