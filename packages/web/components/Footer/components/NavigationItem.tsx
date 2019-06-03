import * as React from "react";
import { ILink } from "../types";
import { useTheme } from "@insta/ui";

export const NavigationItem: React.FC<ILink> = React.memo(({ href, text }) => {
  const { colors } = useTheme();

  return (
    <li
      css={{
        ":not(:last-of-type)": {
          marginRight: 20
        }
      }}
    >
      <a
        href={href}
        css={{
          textDecoration: "none",
          color: colors.dark_blue,
          textTransform: "uppercase",
          fontSize: 12,
          fontWeight: 600,
          transition: "color .15s",
          ":hover": {
            color: colors.light_blue
          }
        }}
      >
        {text}
      </a>
    </li>
  );
});

NavigationItem.displayName = "NavigationItem";
