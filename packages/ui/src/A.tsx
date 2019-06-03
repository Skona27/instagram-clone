import * as React from "react";
import { useTheme } from "./theme";

export const A: React.FC<JSX.IntrinsicElements["a"]> = React.memo(
  ({ children, ...props }) => {
    const { colors } = useTheme();

    return (
      <a
        {...props}
        css={{
          textDecoration: "none",
          fontWeight: "bold",
          color: colors.dark_blue,
          cursor: "pointer",
          transition: "color .15s",
          ":hover": {
            color: colors.light_blue
          }
        }}
      >
        {children}
      </a>
    );
  }
);

A.displayName = "A";
