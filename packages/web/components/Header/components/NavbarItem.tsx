import * as React from "react";
import { ILink } from "../types";
import { useTheme } from "@insta/ui";

export const NavbarItem: React.FC<ILink> = React.memo(({ href, text }) => {
  const { colors } = useTheme();

  return (
    <li
      css={{
        ":not(:last-of-type)": {
          marginRight: 30
        }
      }}
    >
      <a
        href={href}
        css={{
          textDecoration: "none",
          color: colors.dark_blue,
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: 1,
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

NavbarItem.displayName = "NavbarItem";
